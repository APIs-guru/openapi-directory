from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Connection:
    r"""Connection
    <p>A resource that is used to connect third-party source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.</p>
    """
    
    connection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionArn') }})
    connection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionName') }})
    connection_status: Optional[ConnectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionStatus') }})
    host_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostArn') }})
    owner_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerAccountId') }})
    provider_type: Optional[ProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderType') }})
    
