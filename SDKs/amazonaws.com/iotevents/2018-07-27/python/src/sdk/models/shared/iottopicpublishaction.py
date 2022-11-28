from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IotTopicPublishAction:
    r"""IotTopicPublishAction
    Information required to publish the MQTT message through the AWS IoT message broker.
    """
    
    mqtt_topic: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mqttTopic') }})
    payload: Optional[Payload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
