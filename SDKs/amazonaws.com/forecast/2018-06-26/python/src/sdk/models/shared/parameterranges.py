from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParameterRanges:
    r"""ParameterRanges
    Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object.
    """
    
    categorical_parameter_ranges: Optional[List[CategoricalParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CategoricalParameterRanges') }})
    continuous_parameter_ranges: Optional[List[ContinuousParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContinuousParameterRanges') }})
    integer_parameter_ranges: Optional[List[IntegerParameterRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegerParameterRanges') }})
    
