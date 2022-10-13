from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PurchaseOfferingRequest:
    offering_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringId' }})
    offering_promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringPromotionId' }})
    quantity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    
