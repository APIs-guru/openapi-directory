from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class LaunchSpecification:
    r"""LaunchSpecification
    Describes the launch specification for an instance.
    """
    
    addressing_type: Optional[str] = field(default=None)
    block_device_mappings: Optional[List[BlockDeviceMapping]] = field(default=None)
    ebs_optimized: Optional[bool] = field(default=None)
    iam_instance_profile: Optional[IamInstanceProfileSpecification] = field(default=None)
    image_id: Optional[str] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    kernel_id: Optional[str] = field(default=None)
    key_name: Optional[str] = field(default=None)
    monitoring: Optional[RunInstancesMonitoringEnabled] = field(default=None)
    network_interfaces: Optional[List[InstanceNetworkInterfaceSpecification]] = field(default=None)
    placement: Optional[SpotPlacement] = field(default=None)
    ramdisk_id: Optional[str] = field(default=None)
    security_groups: Optional[List[GroupIdentifier]] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    user_data: Optional[str] = field(default=None)
    
