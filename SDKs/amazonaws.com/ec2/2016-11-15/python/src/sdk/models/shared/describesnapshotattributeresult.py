from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSnapshotAttributeResult:
    create_volume_permissions: Optional[List[CreateVolumePermission]] = field(default=None)
    product_codes: Optional[List[ProductCode]] = field(default=None)
    snapshot_id: Optional[str] = field(default=None)
    
