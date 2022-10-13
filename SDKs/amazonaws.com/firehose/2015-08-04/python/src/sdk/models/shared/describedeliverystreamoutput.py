from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import deliverystreamdescription


@dataclass_json
@dataclass
class DescribeDeliveryStreamOutput:
    delivery_stream_description: deliverystreamdescription.DeliveryStreamDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamDescription' }})
    
