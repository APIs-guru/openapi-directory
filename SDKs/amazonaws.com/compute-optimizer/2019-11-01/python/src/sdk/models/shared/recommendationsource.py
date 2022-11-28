from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecommendationSource:
    r"""RecommendationSource
    Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group.
    """
    
    recommendation_source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationSourceArn') }})
    recommendation_source_type: Optional[RecommendationSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationSourceType') }})
    
