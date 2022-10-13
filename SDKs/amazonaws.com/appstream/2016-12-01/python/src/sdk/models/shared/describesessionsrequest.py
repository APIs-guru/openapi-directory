from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authenticationtype_enum


@dataclass_json
@dataclass
class DescribeSessionsRequest:
    authentication_type: Optional[authenticationtype_enum.AuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationType' }})
    fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetName' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    stack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackName' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
