from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class PutItemOutput:
    attributes: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    consumed_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedCapacityUnits' }})
    
