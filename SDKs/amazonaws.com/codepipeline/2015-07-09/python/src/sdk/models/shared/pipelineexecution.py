from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import artifactrevision
from . import pipelineexecutionstatus_enum


@dataclass_json
@dataclass
class PipelineExecution:
    artifact_revisions: Optional[List[artifactrevision.ArtifactRevision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactRevisions' }})
    pipeline_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecutionId' }})
    pipeline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineName' }})
    pipeline_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineVersion' }})
    status: Optional[pipelineexecutionstatus_enum.PipelineExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusSummary' }})
    
