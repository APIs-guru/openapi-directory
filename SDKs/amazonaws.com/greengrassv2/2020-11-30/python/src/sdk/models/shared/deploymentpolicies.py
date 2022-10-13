from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentcomponentupdatepolicy
from . import deploymentconfigurationvalidationpolicy
from . import deploymentfailurehandlingpolicy_enum


@dataclass_json
@dataclass
class DeploymentPolicies:
    component_update_policy: Optional[deploymentcomponentupdatepolicy.DeploymentComponentUpdatePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentUpdatePolicy' }})
    configuration_validation_policy: Optional[deploymentconfigurationvalidationpolicy.DeploymentConfigurationValidationPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationValidationPolicy' }})
    failure_handling_policy: Optional[deploymentfailurehandlingpolicy_enum.DeploymentFailureHandlingPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureHandlingPolicy' }})
    
