from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import objectstorageserverprotocol_enum


@dataclass_json
@dataclass
class DescribeLocationObjectStorageResponse:
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessKey' }})
    agent_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentArns' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationArn' }})
    location_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationUri' }})
    server_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerPort' }})
    server_protocol: Optional[objectstorageserverprotocol_enum.ObjectStorageServerProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerProtocol' }})
    
