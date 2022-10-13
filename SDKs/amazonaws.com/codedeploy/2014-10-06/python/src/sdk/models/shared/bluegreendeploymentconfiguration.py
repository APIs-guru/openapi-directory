from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deploymentreadyoption
from . import greenfleetprovisioningoption
from . import blueinstanceterminationoption


@dataclass_json
@dataclass
class BlueGreenDeploymentConfiguration:
    deployment_ready_option: Optional[deploymentreadyoption.DeploymentReadyOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentReadyOption' }})
    green_fleet_provisioning_option: Optional[greenfleetprovisioningoption.GreenFleetProvisioningOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greenFleetProvisioningOption' }})
    terminate_blue_instances_on_deployment_success: Optional[blueinstanceterminationoption.BlueInstanceTerminationOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terminateBlueInstancesOnDeploymentSuccess' }})
    
