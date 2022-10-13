from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deliverystreamencryptionconfigurationinput


@dataclass_json
@dataclass
class StartDeliveryStreamEncryptionInput:
    delivery_stream_encryption_configuration_input: Optional[deliverystreamencryptionconfigurationinput.DeliveryStreamEncryptionConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamEncryptionConfigurationInput' }})
    delivery_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamName' }})
    
