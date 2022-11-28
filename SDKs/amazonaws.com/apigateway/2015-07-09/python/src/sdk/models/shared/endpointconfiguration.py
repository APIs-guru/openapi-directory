from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndpointConfiguration:
    r"""EndpointConfiguration
    The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
    """
    
    types: Optional[List[EndpointTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    vpc_endpoint_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcEndpointIds') }})
    
