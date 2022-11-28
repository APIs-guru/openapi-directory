from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateResourceServerRequest:
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    scopes: Optional[List[ResourceServerScopeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scopes') }})
    
