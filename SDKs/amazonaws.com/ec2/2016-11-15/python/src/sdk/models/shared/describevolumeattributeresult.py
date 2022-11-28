from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVolumeAttributeResult:
    auto_enable_io: Optional[AttributeBooleanValue] = field(default=None)
    product_codes: Optional[List[ProductCode]] = field(default=None)
    volume_id: Optional[str] = field(default=None)
    
