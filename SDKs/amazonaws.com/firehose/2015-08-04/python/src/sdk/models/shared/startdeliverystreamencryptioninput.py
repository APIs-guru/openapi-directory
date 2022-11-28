from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartDeliveryStreamEncryptionInput:
    delivery_stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    delivery_stream_encryption_configuration_input: Optional[DeliveryStreamEncryptionConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamEncryptionConfigurationInput') }})
    
