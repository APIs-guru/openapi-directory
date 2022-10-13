from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import typedattributevalue
from . import rule
from . import facetattributetype_enum


@dataclass_json
@dataclass
class FacetAttributeDefinition:
    default_value: Optional[typedattributevalue.TypedAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultValue' }})
    is_immutable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsImmutable' }})
    rules: Optional[dict[str, rule.Rule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    type: facetattributetype_enum.FacetAttributeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
