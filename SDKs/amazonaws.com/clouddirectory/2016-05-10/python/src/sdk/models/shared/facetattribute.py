from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FacetAttribute:
    r"""FacetAttribute
    An attribute that is associated with the <a>Facet</a>.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    attribute_definition: Optional[FacetAttributeDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeDefinition') }})
    attribute_reference: Optional[FacetAttributeReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeReference') }})
    required_behavior: Optional[RequiredAttributeBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiredBehavior') }})
    
