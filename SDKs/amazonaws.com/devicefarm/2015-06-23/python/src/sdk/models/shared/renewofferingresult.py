from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RenewOfferingResult:
    r"""RenewOfferingResult
    The result of a renewal offering.
    """
    
    offering_transaction: Optional[OfferingTransaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringTransaction') }})
    
