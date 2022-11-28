from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssociateCustomDomainResponse:
    custom_domain: CustomDomain = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomain') }})
    dns_target: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DNSTarget') }})
    service_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    
