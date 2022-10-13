from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import endpointtype_enum
from . import privatelinkconfig
from . import agentstatus_enum


@dataclass_json
@dataclass
class DescribeAgentResponse:
    agent_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentArn' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_type: Optional[endpointtype_enum.EndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointType' }})
    last_connection_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastConnectionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    private_link_config: Optional[privatelinkconfig.PrivateLinkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateLinkConfig' }})
    status: Optional[agentstatus_enum.AgentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
