from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import offeringtransaction


@dataclass_json
@dataclass
class RenewOfferingResult:
    offering_transaction: Optional[offeringtransaction.OfferingTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringTransaction' }})
    
