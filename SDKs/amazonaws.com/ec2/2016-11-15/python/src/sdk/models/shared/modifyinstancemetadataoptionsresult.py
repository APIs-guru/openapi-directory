from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyInstanceMetadataOptionsResult:
    instance_id: Optional[str] = field(default=None)
    instance_metadata_options: Optional[InstanceMetadataOptionsResponse] = field(default=None)
    
