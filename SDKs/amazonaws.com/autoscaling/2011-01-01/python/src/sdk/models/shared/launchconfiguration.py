from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class LaunchConfiguration:
    r"""LaunchConfiguration
    Describes a launch configuration.
    """
    
    created_time: datetime = field()
    image_id: str = field()
    instance_type: str = field()
    launch_configuration_name: str = field()
    associate_public_ip_address: Optional[bool] = field(default=None)
    block_device_mappings: Optional[List[BlockDeviceMapping]] = field(default=None)
    classic_link_vpc_id: Optional[str] = field(default=None)
    classic_link_vpc_security_groups: Optional[List[str]] = field(default=None)
    ebs_optimized: Optional[bool] = field(default=None)
    iam_instance_profile: Optional[str] = field(default=None)
    instance_monitoring: Optional[InstanceMonitoring] = field(default=None)
    kernel_id: Optional[str] = field(default=None)
    key_name: Optional[str] = field(default=None)
    launch_configuration_arn: Optional[str] = field(default=None)
    metadata_options: Optional[InstanceMetadataOptions] = field(default=None)
    placement_tenancy: Optional[str] = field(default=None)
    ramdisk_id: Optional[str] = field(default=None)
    security_groups: Optional[List[str]] = field(default=None)
    spot_price: Optional[str] = field(default=None)
    user_data: Optional[str] = field(default=None)
    
