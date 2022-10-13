from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gluepolicy


@dataclass_json
@dataclass
class GetResourcePoliciesResponse:
    get_resource_policies_response_list: Optional[List[gluepolicy.GluePolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GetResourcePoliciesResponseList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
