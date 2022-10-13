from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import computetype_enum
from . import environmentvariable
from . import imagepullcredentialstype_enum
from . import registrycredential
from . import environmenttype_enum


@dataclass_json
@dataclass
class ProjectEnvironment:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    compute_type: computetype_enum.ComputeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeType' }})
    environment_variables: Optional[List[environmentvariable.EnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    image: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_pull_credentials_type: Optional[imagepullcredentialstype_enum.ImagePullCredentialsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePullCredentialsType' }})
    privileged_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privilegedMode' }})
    registry_credential: Optional[registrycredential.RegistryCredential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryCredential' }})
    type: environmenttype_enum.EnvironmentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
