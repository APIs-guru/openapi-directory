from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import objectstorageserverprotocol_enum
from . import taglistentry


@dataclass_json
@dataclass
class CreateLocationObjectStorageRequest:
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessKey' }})
    agent_arns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentArns' }})
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketName' }})
    secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretKey' }})
    server_hostname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerHostname' }})
    server_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerPort' }})
    server_protocol: Optional[objectstorageserverprotocol_enum.ObjectStorageServerProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerProtocol' }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subdirectory' }})
    tags: Optional[List[taglistentry.TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
