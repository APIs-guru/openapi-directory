from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceIntegrationConfig:
    r"""ServiceIntegrationConfig
     Information about the integration of DevOps Guru with another AWS service, such as AWS Systems Manager. 
    """
    
    ops_center: Optional[OpsCenterIntegration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsCenter') }})
    
