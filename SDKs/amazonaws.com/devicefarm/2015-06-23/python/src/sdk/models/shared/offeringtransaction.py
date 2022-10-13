from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import monetaryamount
from . import offeringstatus


@dataclass_json
@dataclass
class OfferingTransaction:
    cost: Optional[monetaryamount.MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    offering_promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringPromotionId' }})
    offering_status: Optional[offeringstatus.OfferingStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringStatus' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    
