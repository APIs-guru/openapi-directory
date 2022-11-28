from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeCustomDomainsResponse:
    custom_domains: List[CustomDomain] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomains') }})
    dns_target: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DNSTarget') }})
    service_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
