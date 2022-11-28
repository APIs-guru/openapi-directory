from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModifyHsmRequest:
    r"""ModifyHsmRequest
    Contains the inputs for the <a>ModifyHsm</a> operation.
    """
    
    hsm_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmArn') }})
    eni_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EniIp') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    syslog_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyslogIp') }})
    
