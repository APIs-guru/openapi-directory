from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociateCustomDomainRequest:
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    enable_www_subdomain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableWWWSubdomain' }})
    service_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceArn' }})
    
