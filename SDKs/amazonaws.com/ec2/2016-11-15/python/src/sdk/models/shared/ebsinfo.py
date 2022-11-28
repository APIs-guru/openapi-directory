from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class EbsInfo:
    r"""EbsInfo
    Describes the Amazon EBS features supported by the instance type.
    """
    
    ebs_optimized_info: Optional[EbsOptimizedInfo] = field(default=None)
    ebs_optimized_support: Optional[EbsOptimizedSupportEnum] = field(default=None)
    encryption_support: Optional[EbsEncryptionSupportEnum] = field(default=None)
    nvme_support: Optional[EbsNvmeSupportEnum] = field(default=None)
    
