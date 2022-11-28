from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MachineLearningDetectionConfig:
    r"""MachineLearningDetectionConfig
     The configuration of an ML Detect Security Profile. 
    """
    
    confidence_level: ConfidenceLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceLevel') }})
    
