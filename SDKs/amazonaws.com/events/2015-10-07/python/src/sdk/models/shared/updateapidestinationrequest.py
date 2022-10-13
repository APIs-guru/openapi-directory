from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import apidestinationhttpmethod_enum


@dataclass_json
@dataclass
class UpdateAPIDestinationRequest:
    connection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionArn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    http_method: Optional[apidestinationhttpmethod_enum.APIDestinationHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpMethod' }})
    invocation_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationEndpoint' }})
    invocation_rate_limit_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationRateLimitPerSecond' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
