from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import authenticationconfiguration
from . import coderepository
from . import imagerepository


@dataclass_json
@dataclass
class SourceConfiguration:
    authentication_configuration: Optional[authenticationconfiguration.AuthenticationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationConfiguration' }})
    auto_deployments_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoDeploymentsEnabled' }})
    code_repository: Optional[coderepository.CodeRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeRepository' }})
    image_repository: Optional[imagerepository.ImageRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageRepository' }})
    
