from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectEnvironment:
    r"""ProjectEnvironment
    Information about the build environment of the build project.
    """
    
    compute_type: ComputeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeType') }})
    image: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    type: EnvironmentTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    environment_variables: Optional[List[EnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    image_pull_credentials_type: Optional[ImagePullCredentialsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePullCredentialsType') }})
    privileged_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privilegedMode') }})
    registry_credential: Optional[RegistryCredential] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryCredential') }})
    
