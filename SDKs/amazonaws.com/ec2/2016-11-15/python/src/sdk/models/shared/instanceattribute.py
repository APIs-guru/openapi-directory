from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class InstanceAttribute:
    r"""InstanceAttribute
    Describes an instance attribute.
    """
    
    block_device_mappings: Optional[List[InstanceBlockDeviceMapping]] = field(default=None)
    disable_api_termination: Optional[AttributeBooleanValue] = field(default=None)
    ebs_optimized: Optional[AttributeBooleanValue] = field(default=None)
    ena_support: Optional[AttributeBooleanValue] = field(default=None)
    enclave_options: Optional[EnclaveOptions] = field(default=None)
    groups: Optional[List[GroupIdentifier]] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    instance_initiated_shutdown_behavior: Optional[AttributeValue] = field(default=None)
    instance_type: Optional[AttributeValue] = field(default=None)
    kernel_id: Optional[AttributeValue] = field(default=None)
    product_codes: Optional[List[ProductCode]] = field(default=None)
    ramdisk_id: Optional[AttributeValue] = field(default=None)
    root_device_name: Optional[AttributeValue] = field(default=None)
    source_dest_check: Optional[AttributeBooleanValue] = field(default=None)
    sriov_net_support: Optional[AttributeValue] = field(default=None)
    user_data: Optional[AttributeValue] = field(default=None)
    
