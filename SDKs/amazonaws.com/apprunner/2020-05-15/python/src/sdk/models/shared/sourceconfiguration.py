from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceConfiguration:
    r"""SourceConfiguration
    Describes the source deployed to an AWS App Runner service. It can be a code or an image repository.
    """
    
    authentication_configuration: Optional[AuthenticationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationConfiguration') }})
    auto_deployments_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoDeploymentsEnabled') }})
    code_repository: Optional[CodeRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeRepository') }})
    image_repository: Optional[ImageRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageRepository') }})
    
