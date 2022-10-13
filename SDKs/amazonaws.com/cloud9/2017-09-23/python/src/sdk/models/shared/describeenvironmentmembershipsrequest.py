from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import permissions_enum


@dataclass_json
@dataclass
class DescribeEnvironmentMembershipsRequest:
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    permissions: Optional[List[permissions_enum.PermissionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userArn' }})
    
