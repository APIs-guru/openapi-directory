from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RoleMapping:
    r"""RoleMapping
    A role mapping.
    """
    
    type: RoleMappingTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    ambiguous_role_resolution: Optional[AmbiguousRoleResolutionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmbiguousRoleResolution') }})
    rules_configuration: Optional[RulesConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RulesConfiguration') }})
    
