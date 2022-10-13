from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import facetattributedefinition
from . import facetattributereference
from . import requiredattributebehavior_enum


@dataclass_json
@dataclass
class FacetAttribute:
    attribute_definition: Optional[facetattributedefinition.FacetAttributeDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeDefinition' }})
    attribute_reference: Optional[facetattributereference.FacetAttributeReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeReference' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    required_behavior: Optional[requiredattributebehavior_enum.RequiredAttributeBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiredBehavior' }})
    
