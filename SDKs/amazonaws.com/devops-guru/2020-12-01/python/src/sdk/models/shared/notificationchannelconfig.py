from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationChannelConfig:
    r"""NotificationChannelConfig
     Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
    """
    
    sns: SnsChannelConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sns') }})
    
