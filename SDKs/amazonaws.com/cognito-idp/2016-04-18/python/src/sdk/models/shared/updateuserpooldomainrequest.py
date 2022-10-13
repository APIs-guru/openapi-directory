from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import customdomainconfigtype


@dataclass_json
@dataclass
class UpdateUserPoolDomainRequest:
    custom_domain_config: customdomainconfigtype.CustomDomainConfigType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDomainConfig' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
