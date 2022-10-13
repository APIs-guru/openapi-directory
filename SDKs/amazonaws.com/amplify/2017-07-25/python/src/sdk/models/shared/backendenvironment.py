from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BackendEnvironment:
    backend_environment_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendEnvironmentArn' }})
    create_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_artifacts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentArtifacts' }})
    environment_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentName' }})
    stack_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackName' }})
    update_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
