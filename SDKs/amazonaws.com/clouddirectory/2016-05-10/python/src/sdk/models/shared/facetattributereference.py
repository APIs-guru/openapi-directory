from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FacetAttributeReference:
    target_attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetAttributeName' }})
    target_facet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetFacetName' }})
    
