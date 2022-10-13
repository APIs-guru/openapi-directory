from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ebsvolume
from . import markettype_enum
from . import instancestatus


@dataclass_json
@dataclass
class Instance:
    ebs_volumes: Optional[List[ebsvolume.EbsVolume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsVolumes' }})
    ec2_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2InstanceId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    instance_fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceFleetId' }})
    instance_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceGroupId' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    market: Optional[markettype_enum.MarketTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Market' }})
    private_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateDnsName' }})
    private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateIpAddress' }})
    public_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicDnsName' }})
    public_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicIpAddress' }})
    status: Optional[instancestatus.InstanceStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
