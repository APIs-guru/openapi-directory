from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Environment:
    r"""Environment
    Information about an Cloud9 development environment.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    owner_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerArn') }})
    type: EnvironmentTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    connection_type: Optional[ConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lifecycle: Optional[EnvironmentLifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    managed_credentials_status: Optional[ManagedCredentialsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedCredentialsStatus') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
