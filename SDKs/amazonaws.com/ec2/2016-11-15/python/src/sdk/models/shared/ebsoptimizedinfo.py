from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EbsOptimizedInfo:
    r"""EbsOptimizedInfo
    Describes the optimized EBS performance for supported instance types.
    """
    
    baseline_bandwidth_in_mbps: Optional[int] = field(default=None)
    baseline_iops: Optional[int] = field(default=None)
    baseline_throughput_in_m_bps: Optional[float] = field(default=None)
    maximum_bandwidth_in_mbps: Optional[int] = field(default=None)
    maximum_iops: Optional[int] = field(default=None)
    maximum_throughput_in_m_bps: Optional[float] = field(default=None)
    
