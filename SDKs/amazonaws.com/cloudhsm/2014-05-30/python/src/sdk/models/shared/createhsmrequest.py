from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateHsmRequest:
    r"""CreateHsmRequest
    Contains the inputs for the <code>CreateHsm</code> operation.
    """
    
    iam_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    ssh_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshKey') }})
    subnet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    subscription_type: SubscriptionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionType') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    eni_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EniIp') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    syslog_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyslogIp') }})
    
