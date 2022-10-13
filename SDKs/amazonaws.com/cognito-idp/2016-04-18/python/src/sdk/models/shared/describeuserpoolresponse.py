from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userpooltype


@dataclass_json
@dataclass
class DescribeUserPoolResponse:
    user_pool: Optional[userpooltype.UserPoolType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPool' }})
    
