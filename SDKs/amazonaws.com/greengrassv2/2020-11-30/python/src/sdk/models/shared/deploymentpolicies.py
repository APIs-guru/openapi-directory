from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentPolicies:
    r"""DeploymentPolicies
    Contains information about policies that define how a deployment updates components and handles failure.
    """
    
    component_update_policy: Optional[DeploymentComponentUpdatePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentUpdatePolicy') }})
    configuration_validation_policy: Optional[DeploymentConfigurationValidationPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationValidationPolicy') }})
    failure_handling_policy: Optional[DeploymentFailureHandlingPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureHandlingPolicy') }})
    
