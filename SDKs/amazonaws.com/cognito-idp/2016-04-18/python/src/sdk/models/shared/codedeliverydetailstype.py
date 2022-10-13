from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deliverymediumtype_enum


@dataclass_json
@dataclass
class CodeDeliveryDetailsType:
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    delivery_medium: Optional[deliverymediumtype_enum.DeliveryMediumTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryMedium' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    
