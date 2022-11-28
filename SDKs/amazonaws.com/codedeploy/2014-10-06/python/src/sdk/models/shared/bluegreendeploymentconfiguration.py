from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BlueGreenDeploymentConfiguration:
    r"""BlueGreenDeploymentConfiguration
    Information about blue/green deployment options for a deployment group.
    """
    
    deployment_ready_option: Optional[DeploymentReadyOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentReadyOption') }})
    green_fleet_provisioning_option: Optional[GreenFleetProvisioningOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greenFleetProvisioningOption') }})
    terminate_blue_instances_on_deployment_success: Optional[BlueInstanceTerminationOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminateBlueInstancesOnDeploymentSuccess') }})
    
