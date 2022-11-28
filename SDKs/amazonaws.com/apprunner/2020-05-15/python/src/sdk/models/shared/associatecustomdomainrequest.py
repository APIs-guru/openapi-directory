from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssociateCustomDomainRequest:
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    service_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    enable_www_subdomain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableWWWSubdomain') }})
    
