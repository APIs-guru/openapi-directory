from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceServerType:
    r"""ResourceServerType
    A container for information about a resource server for a user pool.
    """
    
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scopes: Optional[List[ResourceServerScopeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scopes') }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
