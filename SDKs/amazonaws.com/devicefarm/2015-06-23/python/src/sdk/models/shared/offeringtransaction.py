from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OfferingTransaction:
    r"""OfferingTransaction
    Represents the metadata of an offering transaction.
    """
    
    cost: Optional[MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    offering_promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringPromotionId') }})
    offering_status: Optional[OfferingStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringStatus') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
