from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import entitlementvalue


@dataclass_json
@dataclass
class Entitlement:
    customer_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerIdentifier' }})
    dimension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimension' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductCode' }})
    value: Optional[entitlementvalue.EntitlementValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
