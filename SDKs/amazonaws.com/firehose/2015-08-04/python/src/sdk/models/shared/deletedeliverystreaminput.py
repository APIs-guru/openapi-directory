from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteDeliveryStreamInput:
    allow_force_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowForceDelete' }})
    delivery_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamName' }})
    
