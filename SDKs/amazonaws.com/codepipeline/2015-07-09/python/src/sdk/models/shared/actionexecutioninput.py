from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actiontypeid
from . import artifactdetail


@dataclass_json
@dataclass
class ActionExecutionInput:
    action_type_id: Optional[actiontypeid.ActionTypeID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionTypeId' }})
    configuration: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    input_artifacts: Optional[List[artifactdetail.ArtifactDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputArtifacts' }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespace' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    resolved_configuration: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedConfiguration' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
