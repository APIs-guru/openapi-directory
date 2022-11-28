from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentController:
    r"""DeploymentController
    The deployment controller to use for the service. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html\">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
    """
    
    type: DeploymentControllerTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
