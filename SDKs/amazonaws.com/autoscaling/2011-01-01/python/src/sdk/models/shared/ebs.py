from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Ebs:
    r"""Ebs
    Describes information used to set up an Amazon EBS volume specified in a block device mapping.
    """
    
    delete_on_termination: Optional[bool] = field(default=None)
    encrypted: Optional[bool] = field(default=None)
    iops: Optional[int] = field(default=None)
    snapshot_id: Optional[str] = field(default=None)
    throughput: Optional[int] = field(default=None)
    volume_size: Optional[int] = field(default=None)
    volume_type: Optional[str] = field(default=None)
    
