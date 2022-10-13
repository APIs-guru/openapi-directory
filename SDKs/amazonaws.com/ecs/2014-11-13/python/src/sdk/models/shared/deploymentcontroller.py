from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import deploymentcontrollertype_enum


@dataclass_json
@dataclass
class DeploymentController:
    type: deploymentcontrollertype_enum.DeploymentControllerTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
