from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Image:
    r"""Image
    Describes an image.
    """
    
    architecture: Optional[ArchitectureValuesEnum] = field(default=None)
    block_device_mappings: Optional[List[BlockDeviceMapping]] = field(default=None)
    boot_mode: Optional[BootModeValuesEnum] = field(default=None)
    creation_date: Optional[str] = field(default=None)
    deprecation_time: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    ena_support: Optional[bool] = field(default=None)
    hypervisor: Optional[HypervisorTypeEnum] = field(default=None)
    image_id: Optional[str] = field(default=None)
    image_location: Optional[str] = field(default=None)
    image_owner_alias: Optional[str] = field(default=None)
    image_type: Optional[ImageTypeValuesEnum] = field(default=None)
    kernel_id: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    platform: Optional[PlatformValuesEnum] = field(default=None)
    platform_details: Optional[str] = field(default=None)
    product_codes: Optional[List[ProductCode]] = field(default=None)
    public: Optional[bool] = field(default=None)
    ramdisk_id: Optional[str] = field(default=None)
    root_device_name: Optional[str] = field(default=None)
    root_device_type: Optional[DeviceTypeEnum] = field(default=None)
    sriov_net_support: Optional[str] = field(default=None)
    state: Optional[ImageStateEnum] = field(default=None)
    state_reason: Optional[StateReason] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    usage_operation: Optional[str] = field(default=None)
    virtualization_type: Optional[VirtualizationTypeEnum] = field(default=None)
    
