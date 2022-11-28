from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetConnectivityInfoResponse:
    connectivity_info: Optional[List[ConnectivityInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectivityInfo') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
