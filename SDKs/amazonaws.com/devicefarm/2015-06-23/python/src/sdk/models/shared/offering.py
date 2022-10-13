from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deviceplatform_enum
from . import recurringcharge
from . import offeringtype_enum


@dataclass_json
@dataclass
class Offering:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    platform: Optional[deviceplatform_enum.DevicePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    recurring_charges: Optional[List[recurringcharge.RecurringCharge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurringCharges' }})
    type: Optional[offeringtype_enum.OfferingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
