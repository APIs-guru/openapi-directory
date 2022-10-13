from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offeringtransaction


@dataclass_json
@dataclass
class ListOfferingTransactionsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    offering_transactions: Optional[List[offeringtransaction.OfferingTransaction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringTransactions' }})
    
