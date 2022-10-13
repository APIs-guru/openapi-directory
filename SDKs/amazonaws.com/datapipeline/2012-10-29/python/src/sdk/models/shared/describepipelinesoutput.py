from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import pipelinedescription


@dataclass_json
@dataclass
class DescribePipelinesOutput:
    pipeline_description_list: List[pipelinedescription.PipelineDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineDescriptionList' }})
    
