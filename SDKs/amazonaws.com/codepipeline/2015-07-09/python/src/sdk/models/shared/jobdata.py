from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobData:
    r"""JobData
    Represents other information about a job required for a job worker to complete the job.
    """
    
    action_configuration: Optional[ActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionConfiguration') }})
    action_type_id: Optional[ActionTypeID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionTypeId') }})
    artifact_credentials: Optional[AwsSessionCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactCredentials') }})
    continuation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuationToken') }})
    encryption_key: Optional[EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    input_artifacts: Optional[List[Artifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifacts') }})
    output_artifacts: Optional[List[Artifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifacts') }})
    pipeline_context: Optional[PipelineContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineContext') }})
    
