from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actioncontext
from . import stagecontext


@dataclass_json
@dataclass
class PipelineContext:
    action: Optional[actioncontext.ActionContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    pipeline_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineArn' }})
    pipeline_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecutionId' }})
    pipeline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineName' }})
    stage: Optional[stagecontext.StageContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    
