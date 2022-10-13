from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import privateip
from . import securitygroup


@dataclass_json
@dataclass
class NetworkInterface:
    ipv6_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6Addresses' }})
    network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterfaceId' }})
    private_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateDnsName' }})
    private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIpAddress' }})
    private_ip_addresses: Optional[List[privateip.PrivateIP]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIpAddresses' }})
    public_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicDnsName' }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicIp' }})
    security_groups: Optional[List[securitygroup.SecurityGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroups' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetId' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcId' }})
    
