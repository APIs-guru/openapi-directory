from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ResponseLaunchTemplateData:
    r"""ResponseLaunchTemplateData
    The information for a launch template. 
    """
    
    block_device_mappings: Optional[List[LaunchTemplateBlockDeviceMapping]] = field(default=None)
    capacity_reservation_specification: Optional[LaunchTemplateCapacityReservationSpecificationResponse] = field(default=None)
    cpu_options: Optional[LaunchTemplateCPUOptions] = field(default=None)
    credit_specification: Optional[CreditSpecification] = field(default=None)
    disable_api_termination: Optional[bool] = field(default=None)
    ebs_optimized: Optional[bool] = field(default=None)
    elastic_gpu_specifications: Optional[List[ElasticGpuSpecificationResponse]] = field(default=None)
    elastic_inference_accelerators: Optional[List[LaunchTemplateElasticInferenceAcceleratorResponse]] = field(default=None)
    enclave_options: Optional[LaunchTemplateEnclaveOptions] = field(default=None)
    hibernation_options: Optional[LaunchTemplateHibernationOptions] = field(default=None)
    iam_instance_profile: Optional[LaunchTemplateIamInstanceProfileSpecification] = field(default=None)
    image_id: Optional[str] = field(default=None)
    instance_initiated_shutdown_behavior: Optional[ShutdownBehaviorEnum] = field(default=None)
    instance_market_options: Optional[LaunchTemplateInstanceMarketOptions] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    kernel_id: Optional[str] = field(default=None)
    key_name: Optional[str] = field(default=None)
    license_specifications: Optional[List[LaunchTemplateLicenseConfiguration]] = field(default=None)
    metadata_options: Optional[LaunchTemplateInstanceMetadataOptions] = field(default=None)
    monitoring: Optional[LaunchTemplatesMonitoring] = field(default=None)
    network_interfaces: Optional[List[LaunchTemplateInstanceNetworkInterfaceSpecification]] = field(default=None)
    placement: Optional[LaunchTemplatePlacement] = field(default=None)
    ram_disk_id: Optional[str] = field(default=None)
    security_group_ids: Optional[List[str]] = field(default=None)
    security_groups: Optional[List[str]] = field(default=None)
    tag_specifications: Optional[List[LaunchTemplateTagSpecification]] = field(default=None)
    user_data: Optional[str] = field(default=None)
    
