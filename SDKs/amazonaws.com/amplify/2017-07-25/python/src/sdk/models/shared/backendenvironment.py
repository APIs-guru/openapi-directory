from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BackendEnvironment:
    r"""BackendEnvironment
     Describes the backend environment for an Amplify app. 
    """
    
    backend_environment_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendEnvironmentArn') }})
    create_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    environment_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentName') }})
    update_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_artifacts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentArtifacts') }})
    stack_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackName') }})
    
