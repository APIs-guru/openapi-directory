from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ElasticsearchSettings:
    endpoint_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointUri' }})
    error_retry_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorRetryDuration' }})
    full_load_error_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullLoadErrorPercentage' }})
    service_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceAccessRoleArn' }})
    
