from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExpiryEventsConfiguration:
    days_before_expiry: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DaysBeforeExpiry' }})
    
