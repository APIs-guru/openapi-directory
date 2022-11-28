from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOfferingTransactionsResult:
    r"""ListOfferingTransactionsResult
    Returns the transaction log of the specified offerings.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    offering_transactions: Optional[List[OfferingTransaction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringTransactions') }})
    
