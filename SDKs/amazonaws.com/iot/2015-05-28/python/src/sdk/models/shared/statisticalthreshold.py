from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StatisticalThreshold:
    r"""StatisticalThreshold
    A statistical ranking (percentile) that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
    """
    
    statistic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistic') }})
    
