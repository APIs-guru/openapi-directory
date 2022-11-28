from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PipelineExecution:
    r"""PipelineExecution
    Represents information about an execution of a pipeline.
    """
    
    artifact_revisions: Optional[List[ArtifactRevision]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactRevisions') }})
    pipeline_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    pipeline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    pipeline_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineVersion') }})
    status: Optional[PipelineExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusSummary') }})
    
