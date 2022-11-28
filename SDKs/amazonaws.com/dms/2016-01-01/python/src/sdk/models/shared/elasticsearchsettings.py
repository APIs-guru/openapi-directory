from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ElasticsearchSettings:
    r"""ElasticsearchSettings
    Provides information that defines an Elasticsearch endpoint.
    """
    
    endpoint_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointUri') }})
    service_access_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccessRoleArn') }})
    error_retry_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorRetryDuration') }})
    full_load_error_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullLoadErrorPercentage') }})
    
