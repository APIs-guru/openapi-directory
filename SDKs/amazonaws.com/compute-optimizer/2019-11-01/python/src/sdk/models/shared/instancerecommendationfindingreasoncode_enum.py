from dataclasses import dataclass, field
from enum import Enum

class InstanceRecommendationFindingReasonCodeEnum(str, Enum):
    CPU_OVERPROVISIONED = "CPUOverprovisioned"
    CPU_UNDERPROVISIONED = "CPUUnderprovisioned"
    MEMORY_OVERPROVISIONED = "MemoryOverprovisioned"
    MEMORY_UNDERPROVISIONED = "MemoryUnderprovisioned"
    EBS_THROUGHPUT_OVERPROVISIONED = "EBSThroughputOverprovisioned"
    EBS_THROUGHPUT_UNDERPROVISIONED = "EBSThroughputUnderprovisioned"
    EBSIOPS_OVERPROVISIONED = "EBSIOPSOverprovisioned"
    EBSIOPS_UNDERPROVISIONED = "EBSIOPSUnderprovisioned"
    NETWORK_BANDWIDTH_OVERPROVISIONED = "NetworkBandwidthOverprovisioned"
    NETWORK_BANDWIDTH_UNDERPROVISIONED = "NetworkBandwidthUnderprovisioned"
    NETWORK_PPS_OVERPROVISIONED = "NetworkPPSOverprovisioned"
    NETWORK_PPS_UNDERPROVISIONED = "NetworkPPSUnderprovisioned"
    DISK_IOPS_OVERPROVISIONED = "DiskIOPSOverprovisioned"
    DISK_IOPS_UNDERPROVISIONED = "DiskIOPSUnderprovisioned"
    DISK_THROUGHPUT_OVERPROVISIONED = "DiskThroughputOverprovisioned"
    DISK_THROUGHPUT_UNDERPROVISIONED = "DiskThroughputUnderprovisioned"

