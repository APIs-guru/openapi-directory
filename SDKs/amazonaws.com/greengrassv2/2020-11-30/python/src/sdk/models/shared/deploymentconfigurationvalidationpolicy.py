from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeploymentConfigurationValidationPolicy:
    r"""DeploymentConfigurationValidationPolicy
    Contains information about how long a component on a core device can validate its configuration updates before it times out. Components can use the <a href=\"https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetovalidateconfigurationupdates\">SubscribeToValidateConfigurationUpdates</a> IPC operation to receive notifications when a deployment specifies a configuration update. Then, components can respond with the <a href=\"https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-sendconfigurationvalidityreport\">SendConfigurationValidityReport</a> IPC operation. For more information, see <a href=\"https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html\">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
    """
    
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInSeconds') }})
    
