from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PipelineContext:
    r"""PipelineContext
    <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note>
    """
    
    action: Optional[ActionContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    pipeline_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineArn') }})
    pipeline_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    pipeline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    stage: Optional[StageContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    
