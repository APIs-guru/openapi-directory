from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import datastoreproperties


@dataclass_json
@dataclass
class DescribeFhirDatastoreResponse:
    datastore_properties: datastoreproperties.DatastoreProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreProperties' }})
    
