from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThirdPartyJobDetails:
    r"""ThirdPartyJobDetails
    The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request.
    """
    
    data: Optional[ThirdPartyJobData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    
