from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Connection:
    endpoint_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointArn' }})
    endpoint_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointIdentifier' }})
    last_failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastFailureMessage' }})
    replication_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceArn' }})
    replication_instance_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceIdentifier' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
