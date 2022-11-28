from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Latency:
    r"""Latency
    Represents the average latency for the slowest X percent of requests over the last 10 seconds.
    """
    
    p10: Optional[float] = field(default=None)
    p50: Optional[float] = field(default=None)
    p75: Optional[float] = field(default=None)
    p85: Optional[float] = field(default=None)
    p90: Optional[float] = field(default=None)
    p95: Optional[float] = field(default=None)
    p99: Optional[float] = field(default=None)
    p999: Optional[float] = field(default=None)
    
