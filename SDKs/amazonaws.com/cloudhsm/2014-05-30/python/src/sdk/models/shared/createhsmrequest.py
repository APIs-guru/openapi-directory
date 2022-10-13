from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import subscriptiontype_enum


@dataclass_json
@dataclass
class CreateHsmRequest:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    eni_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EniIp' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalId' }})
    iam_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRoleArn' }})
    ssh_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshKey' }})
    subnet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    subscription_type: subscriptiontype_enum.SubscriptionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionType' }})
    syslog_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyslogIp' }})
    
