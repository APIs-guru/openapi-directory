from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cpuvendorarchitecture_enum


@dataclass_json
@dataclass
class RecommendationPreferences:
    cpu_vendor_architectures: Optional[List[cpuvendorarchitecture_enum.CPUVendorArchitectureEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuVendorArchitectures' }})
    
