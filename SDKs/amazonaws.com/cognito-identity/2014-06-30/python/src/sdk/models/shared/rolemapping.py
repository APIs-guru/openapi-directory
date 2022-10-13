from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ambiguousroleresolutiontype_enum
from . import rulesconfigurationtype
from . import rolemappingtype_enum


@dataclass_json
@dataclass
class RoleMapping:
    ambiguous_role_resolution: Optional[ambiguousroleresolutiontype_enum.AmbiguousRoleResolutionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AmbiguousRoleResolution' }})
    rules_configuration: Optional[rulesconfigurationtype.RulesConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RulesConfiguration' }})
    type: rolemappingtype_enum.RoleMappingTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
