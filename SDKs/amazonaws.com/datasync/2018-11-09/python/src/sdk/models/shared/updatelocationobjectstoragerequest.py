from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import objectstorageserverprotocol_enum


@dataclass_json
@dataclass
class UpdateLocationObjectStorageRequest:
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessKey' }})
    agent_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentArns' }})
    location_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationArn' }})
    secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretKey' }})
    server_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerPort' }})
    server_protocol: Optional[objectstorageserverprotocol_enum.ObjectStorageServerProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerProtocol' }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subdirectory' }})
    
