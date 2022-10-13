from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datastoreproperties


@dataclass_json
@dataclass
class ListFhirDatastoresResponse:
    datastore_properties_list: List[datastoreproperties.DatastoreProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastorePropertiesList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
