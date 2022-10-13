from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import grpcretrypolicyevent_enum
from . import duration
from . import tcpretrypolicyevent_enum


@dataclass_json
@dataclass
class GrpcRetryPolicy:
    grpc_retry_events: Optional[List[grpcretrypolicyevent_enum.GrpcRetryPolicyEventEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpcRetryEvents' }})
    http_retry_events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpRetryEvents' }})
    max_retries: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRetries' }})
    per_retry_timeout: duration.Duration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perRetryTimeout' }})
    tcp_retry_events: Optional[List[tcpretrypolicyevent_enum.TCPRetryPolicyEventEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tcpRetryEvents' }})
    
