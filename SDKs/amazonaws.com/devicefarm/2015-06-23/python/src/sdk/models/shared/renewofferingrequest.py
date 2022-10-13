from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RenewOfferingRequest:
    offering_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringId' }})
    quantity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    
