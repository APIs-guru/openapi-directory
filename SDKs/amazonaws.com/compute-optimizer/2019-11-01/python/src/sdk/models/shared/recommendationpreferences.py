from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecommendationPreferences:
    r"""RecommendationPreferences
    Describes preferences for recommendations.
    """
    
    cpu_vendor_architectures: Optional[List[CPUVendorArchitectureEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuVendorArchitectures') }})
    
