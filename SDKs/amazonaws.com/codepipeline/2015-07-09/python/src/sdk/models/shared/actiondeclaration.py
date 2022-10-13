from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actiontypeid
from . import inputartifact
from . import outputartifact


@dataclass_json
@dataclass
class ActionDeclaration:
    action_type_id: actiontypeid.ActionTypeID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionTypeId' }})
    configuration: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    input_artifacts: Optional[List[inputartifact.InputArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputArtifacts' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespace' }})
    output_artifacts: Optional[List[outputartifact.OutputArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputArtifacts' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    run_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runOrder' }})
    
