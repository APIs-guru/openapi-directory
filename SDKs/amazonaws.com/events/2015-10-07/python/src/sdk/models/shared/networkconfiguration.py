from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsvpcconfiguration


@dataclass_json
@dataclass
class NetworkConfiguration:
    awsvpc_configuration: Optional[awsvpcconfiguration.AwsVpcConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsvpcConfiguration' }})
    
