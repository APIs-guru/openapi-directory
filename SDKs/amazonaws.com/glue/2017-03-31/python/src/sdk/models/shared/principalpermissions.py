from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PrincipalPermissions:
    r"""PrincipalPermissions
    Permissions granted to a principal.
    """
    
    permissions: Optional[List[PermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    principal: Optional[DataLakePrincipal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    
