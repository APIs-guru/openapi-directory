from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ImageAttribute:
    r"""ImageAttribute
    Describes an image attribute.
    """
    
    block_device_mappings: Optional[List[BlockDeviceMapping]] = field(default=None)
    boot_mode: Optional[AttributeValue] = field(default=None)
    description: Optional[AttributeValue] = field(default=None)
    image_id: Optional[str] = field(default=None)
    kernel_id: Optional[AttributeValue] = field(default=None)
    launch_permissions: Optional[List[LaunchPermission]] = field(default=None)
    product_codes: Optional[List[ProductCode]] = field(default=None)
    ramdisk_id: Optional[AttributeValue] = field(default=None)
    sriov_net_support: Optional[AttributeValue] = field(default=None)
    
