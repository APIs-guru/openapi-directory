from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import typedattributevalue
from . import requiredattributebehavior_enum
from . import rule
from . import facetattributetype_enum


@dataclass_json
@dataclass
class TypedLinkAttributeDefinition:
    default_value: Optional[typedattributevalue.TypedAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultValue' }})
    is_immutable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsImmutable' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    required_behavior: requiredattributebehavior_enum.RequiredAttributeBehaviorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiredBehavior' }})
    rules: Optional[dict[str, rule.Rule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    type: facetattributetype_enum.FacetAttributeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
