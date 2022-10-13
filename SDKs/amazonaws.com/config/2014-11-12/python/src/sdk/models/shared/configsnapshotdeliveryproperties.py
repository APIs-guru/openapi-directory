from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import maximumexecutionfrequency_enum


@dataclass_json
@dataclass
class ConfigSnapshotDeliveryProperties:
    delivery_frequency: Optional[maximumexecutionfrequency_enum.MaximumExecutionFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryFrequency' }})
    
