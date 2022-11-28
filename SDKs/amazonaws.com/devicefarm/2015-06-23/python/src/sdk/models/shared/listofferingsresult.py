from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOfferingsResult:
    r"""ListOfferingsResult
    Represents the return values of the list of offerings.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    offerings: Optional[List[Offering]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerings') }})
    
