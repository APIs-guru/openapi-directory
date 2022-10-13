from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentoption_enum
from . import deploymenttype_enum


@dataclass_json
@dataclass
class DeploymentStyle:
    deployment_option: Optional[deploymentoption_enum.DeploymentOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentOption' }})
    deployment_type: Optional[deploymenttype_enum.DeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentType' }})
    
