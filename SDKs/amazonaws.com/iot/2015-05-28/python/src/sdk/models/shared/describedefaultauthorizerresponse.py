from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import authorizerdescription


@dataclass_json
@dataclass
class DescribeDefaultAuthorizerResponse:
    authorizer_description: Optional[authorizerdescription.AuthorizerDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerDescription' }})
    
