from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import offering
from . import offeringtransactiontype_enum


@dataclass_json
@dataclass
class OfferingStatus:
    effective_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    offering: Optional[offering.Offering] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offering' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    type: Optional[offeringtransactiontype_enum.OfferingTransactionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
