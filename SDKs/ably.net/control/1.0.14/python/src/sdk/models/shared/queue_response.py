from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueueResponseAmqp:
    queue_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queueName' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class QueueResponseMessages:
    ready: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ready' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    unacknowledged: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unacknowledged' }})
    

@dataclass_json
@dataclass
class QueueResponseStats:
    acknowledgement_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgementRate' }})
    delivery_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryRate' }})
    publish_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishRate' }})
    

@dataclass_json
@dataclass
class QueueResponseStomp:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class QueueResponse:
    amqp: Optional[QueueResponseAmqp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amqp' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    deadletter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deadletter' }})
    deadletter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deadletterId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    max_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLength' }})
    messages: Optional[QueueResponseMessages] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    stats: Optional[QueueResponseStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    stomp: Optional[QueueResponseStomp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stomp' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    
