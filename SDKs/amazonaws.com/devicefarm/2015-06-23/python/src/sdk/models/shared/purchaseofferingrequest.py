from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PurchaseOfferingRequest:
    r"""PurchaseOfferingRequest
    Represents a request for a purchase offering.
    """
    
    offering_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringId') }})
    quantity: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    offering_promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringPromotionId') }})
    
