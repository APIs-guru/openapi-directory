from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcRetryPolicy:
    r"""GrpcRetryPolicy
    An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href=\"https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on\">Envoy documentation</a>.
    """
    
    max_retries: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetries') }})
    per_retry_timeout: Duration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('perRetryTimeout') }})
    grpc_retry_events: Optional[List[GrpcRetryPolicyEventEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcRetryEvents') }})
    http_retry_events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRetryEvents') }})
    tcp_retry_events: Optional[List[TCPRetryPolicyEventEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcpRetryEvents') }})
    
