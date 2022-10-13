from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import mappingentry


@dataclass_json
@dataclass
class GetMappingResponse:
    mapping: List[mappingentry.MappingEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mapping' }})
    
