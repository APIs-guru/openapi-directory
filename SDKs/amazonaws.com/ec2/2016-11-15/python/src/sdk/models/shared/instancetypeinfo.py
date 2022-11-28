from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class InstanceTypeInfo:
    r"""InstanceTypeInfo
    Describes the instance type.
    """
    
    auto_recovery_supported: Optional[bool] = field(default=None)
    bare_metal: Optional[bool] = field(default=None)
    burstable_performance_supported: Optional[bool] = field(default=None)
    current_generation: Optional[bool] = field(default=None)
    dedicated_hosts_supported: Optional[bool] = field(default=None)
    ebs_info: Optional[EbsInfo] = field(default=None)
    fpga_info: Optional[FpgaInfo] = field(default=None)
    free_tier_eligible: Optional[bool] = field(default=None)
    gpu_info: Optional[GpuInfo] = field(default=None)
    hibernation_supported: Optional[bool] = field(default=None)
    hypervisor: Optional[InstanceTypeHypervisorEnum] = field(default=None)
    inference_accelerator_info: Optional[InferenceAcceleratorInfo] = field(default=None)
    instance_storage_info: Optional[InstanceStorageInfo] = field(default=None)
    instance_storage_supported: Optional[bool] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    memory_info: Optional[MemoryInfo] = field(default=None)
    network_info: Optional[NetworkInfo] = field(default=None)
    placement_group_info: Optional[PlacementGroupInfo] = field(default=None)
    processor_info: Optional[ProcessorInfo] = field(default=None)
    supported_boot_modes: Optional[List[BootModeTypeEnum]] = field(default=None)
    supported_root_device_types: Optional[List[RootDeviceTypeEnum]] = field(default=None)
    supported_usage_classes: Optional[List[UsageClassTypeEnum]] = field(default=None)
    supported_virtualization_types: Optional[List[VirtualizationTypeEnum]] = field(default=None)
    v_cpu_info: Optional[VCPUInfo] = field(default=None)
    
