from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class SpotFleetLaunchSpecification:
    r"""SpotFleetLaunchSpecification
    Describes the launch specification for one or more Spot Instances. If you include On-Demand capacity in your fleet request or want to specify an EFA network device, you can't use <code>SpotFleetLaunchSpecification</code>; you must use <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html\">LaunchTemplateConfig</a>.
    """
    
    addressing_type: Optional[str] = field(default=None)
    block_device_mappings: Optional[List[BlockDeviceMapping]] = field(default=None)
    ebs_optimized: Optional[bool] = field(default=None)
    iam_instance_profile: Optional[IamInstanceProfileSpecification] = field(default=None)
    image_id: Optional[str] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    kernel_id: Optional[str] = field(default=None)
    key_name: Optional[str] = field(default=None)
    monitoring: Optional[SpotFleetMonitoring] = field(default=None)
    network_interfaces: Optional[List[InstanceNetworkInterfaceSpecification]] = field(default=None)
    placement: Optional[SpotPlacement] = field(default=None)
    ramdisk_id: Optional[str] = field(default=None)
    security_groups: Optional[List[GroupIdentifier]] = field(default=None)
    spot_price: Optional[str] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    tag_specifications: Optional[List[SpotFleetTagSpecification]] = field(default=None)
    user_data: Optional[str] = field(default=None)
    weighted_capacity: Optional[float] = field(default=None)
    
