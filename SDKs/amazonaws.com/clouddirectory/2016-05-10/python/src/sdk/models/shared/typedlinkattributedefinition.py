from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TypedLinkAttributeDefinition:
    r"""TypedLinkAttributeDefinition
    A typed link attribute definition.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    required_behavior: RequiredAttributeBehaviorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiredBehavior') }})
    type: FacetAttributeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    default_value: Optional[TypedAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultValue') }})
    is_immutable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsImmutable') }})
    rules: Optional[dict[str, Rule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    
