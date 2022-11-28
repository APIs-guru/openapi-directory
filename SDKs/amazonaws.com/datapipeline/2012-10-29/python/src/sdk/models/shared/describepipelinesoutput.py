from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePipelinesOutput:
    r"""DescribePipelinesOutput
    Contains the output of DescribePipelines.
    """
    
    pipeline_description_list: List[PipelineDescription] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineDescriptionList') }})
    
