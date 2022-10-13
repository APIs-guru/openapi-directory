from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offeringpromotion


@dataclass_json
@dataclass
class ListOfferingPromotionsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    offering_promotions: Optional[List[offeringpromotion.OfferingPromotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringPromotions' }})
    
