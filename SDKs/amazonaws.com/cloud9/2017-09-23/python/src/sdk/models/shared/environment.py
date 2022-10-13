from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectiontype_enum
from . import environmentlifecycle
from . import managedcredentialsstatus_enum
from . import environmenttype_enum


@dataclass_json
@dataclass
class Environment:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    connection_type: Optional[connectiontype_enum.ConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lifecycle: Optional[environmentlifecycle.EnvironmentLifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycle' }})
    managed_credentials_status: Optional[managedcredentialsstatus_enum.ManagedCredentialsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedCredentialsStatus' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerArn' }})
    type: environmenttype_enum.EnvironmentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
