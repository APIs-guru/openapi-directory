from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAPIDestinationRequest:
    connection_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionArn') }})
    http_method: APIDestinationHTTPMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpMethod') }})
    invocation_endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationEndpoint') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    invocation_rate_limit_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationRateLimitPerSecond') }})
    
