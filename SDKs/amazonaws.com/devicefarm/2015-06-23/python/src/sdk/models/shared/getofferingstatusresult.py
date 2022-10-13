from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import offeringstatus
from . import offeringstatus


@dataclass_json
@dataclass
class GetOfferingStatusResult:
    current: Optional[dict[str, offeringstatus.OfferingStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current' }})
    next_period: Optional[dict[str, offeringstatus.OfferingStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPeriod' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
