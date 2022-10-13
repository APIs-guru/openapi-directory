from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourceowner_enum


@dataclass_json
@dataclass
class ListCertificateAuthoritiesRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_owner: Optional[resourceowner_enum.ResourceOwnerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceOwner' }})
    
