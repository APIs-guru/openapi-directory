from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authenticationtype_enum


@dataclass_json
@dataclass
class DescribeUsersRequest:
    authentication_type: authenticationtype_enum.AuthenticationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationType' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
