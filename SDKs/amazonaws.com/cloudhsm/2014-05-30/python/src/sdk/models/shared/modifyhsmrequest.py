from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModifyHsmRequest:
    eni_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EniIp' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalId' }})
    hsm_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmArn' }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRoleArn' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    syslog_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyslogIp' }})
    
