from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actionconfiguration
from . import actiontypeid
from . import awssessioncredentials
from . import encryptionkey
from . import artifact
from . import artifact
from . import pipelinecontext


@dataclass_json
@dataclass
class JobData:
    action_configuration: Optional[actionconfiguration.ActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionConfiguration' }})
    action_type_id: Optional[actiontypeid.ActionTypeID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionTypeId' }})
    artifact_credentials: Optional[awssessioncredentials.AwsSessionCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactCredentials' }})
    continuation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuationToken' }})
    encryption_key: Optional[encryptionkey.EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    input_artifacts: Optional[List[artifact.Artifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputArtifacts' }})
    output_artifacts: Optional[List[artifact.Artifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputArtifacts' }})
    pipeline_context: Optional[pipelinecontext.PipelineContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineContext' }})
    
