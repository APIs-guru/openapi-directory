from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import location
from . import catalogentry
from . import catalogentry


@dataclass_json
@dataclass
class GetMappingRequest:
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    sinks: Optional[List[catalogentry.CatalogEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sinks' }})
    source: catalogentry.CatalogEntry = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    
