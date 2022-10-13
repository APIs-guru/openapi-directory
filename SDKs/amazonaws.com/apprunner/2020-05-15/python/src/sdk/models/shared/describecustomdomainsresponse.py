from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customdomain


@dataclass_json
@dataclass
class DescribeCustomDomainsResponse:
    custom_domains: List[customdomain.CustomDomain] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDomains' }})
    dns_target: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DNSTarget' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    service_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceArn' }})
    
