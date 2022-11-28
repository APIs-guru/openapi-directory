from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Instance:
    r"""Instance
    Describes an instance.
    """
    
    ami_launch_index: Optional[int] = field(default=None)
    architecture: Optional[ArchitectureValuesEnum] = field(default=None)
    block_device_mappings: Optional[List[InstanceBlockDeviceMapping]] = field(default=None)
    boot_mode: Optional[BootModeValuesEnum] = field(default=None)
    capacity_reservation_id: Optional[str] = field(default=None)
    capacity_reservation_specification: Optional[CapacityReservationSpecificationResponse] = field(default=None)
    client_token: Optional[str] = field(default=None)
    cpu_options: Optional[CPUOptions] = field(default=None)
    ebs_optimized: Optional[bool] = field(default=None)
    elastic_gpu_associations: Optional[List[ElasticGpuAssociation]] = field(default=None)
    elastic_inference_accelerator_associations: Optional[List[ElasticInferenceAcceleratorAssociation]] = field(default=None)
    ena_support: Optional[bool] = field(default=None)
    enclave_options: Optional[EnclaveOptions] = field(default=None)
    hibernation_options: Optional[HibernationOptions] = field(default=None)
    hypervisor: Optional[HypervisorTypeEnum] = field(default=None)
    iam_instance_profile: Optional[IamInstanceProfile] = field(default=None)
    image_id: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    instance_lifecycle: Optional[InstanceLifecycleTypeEnum] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    kernel_id: Optional[str] = field(default=None)
    key_name: Optional[str] = field(default=None)
    launch_time: Optional[datetime] = field(default=None)
    licenses: Optional[List[LicenseConfiguration]] = field(default=None)
    metadata_options: Optional[InstanceMetadataOptionsResponse] = field(default=None)
    monitoring: Optional[Monitoring] = field(default=None)
    network_interfaces: Optional[List[InstanceNetworkInterface]] = field(default=None)
    outpost_arn: Optional[str] = field(default=None)
    placement: Optional[Placement] = field(default=None)
    platform: Optional[PlatformValuesEnum] = field(default=None)
    private_dns_name: Optional[str] = field(default=None)
    private_ip_address: Optional[str] = field(default=None)
    product_codes: Optional[List[ProductCode]] = field(default=None)
    public_dns_name: Optional[str] = field(default=None)
    public_ip_address: Optional[str] = field(default=None)
    ramdisk_id: Optional[str] = field(default=None)
    root_device_name: Optional[str] = field(default=None)
    root_device_type: Optional[DeviceTypeEnum] = field(default=None)
    security_groups: Optional[List[GroupIdentifier]] = field(default=None)
    source_dest_check: Optional[bool] = field(default=None)
    spot_instance_request_id: Optional[str] = field(default=None)
    sriov_net_support: Optional[str] = field(default=None)
    state: Optional[InstanceState] = field(default=None)
    state_reason: Optional[StateReason] = field(default=None)
    state_transition_reason: Optional[str] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    virtualization_type: Optional[VirtualizationTypeEnum] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
