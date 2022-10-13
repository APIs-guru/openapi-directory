from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import vpcconfiguration


@dataclass_json
@dataclass
class NetworkOriginConfiguration:
    internet_configuration: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internetConfiguration' }})
    vpc_configuration: Optional[vpcconfiguration.VpcConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConfiguration' }})
    
