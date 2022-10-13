from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import deliverystreamfailuretype_enum


@dataclass_json
@dataclass
class FailureDescription:
    details: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    type: deliverystreamfailuretype_enum.DeliveryStreamFailureTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
