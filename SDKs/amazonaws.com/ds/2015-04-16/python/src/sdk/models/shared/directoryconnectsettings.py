from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DirectoryConnectSettings:
    customer_dns_ips: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerDnsIps' }})
    customer_user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerUserName' }})
    subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    vpc_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
