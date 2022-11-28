from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VolumeRecommendationOption:
    r"""VolumeRecommendationOption
    Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.
    """
    
    configuration: Optional[VolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    performance_risk: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceRisk') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    
