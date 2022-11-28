from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeServicesResponse:
    failures: Optional[List[Failure]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    services: Optional[List[Service]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
