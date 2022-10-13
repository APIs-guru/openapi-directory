from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vpcconfiguration


@dataclass_json
@dataclass
class UpdateHostInput:
    host_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostArn' }})
    provider_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderEndpoint' }})
    vpc_configuration: Optional[vpcconfiguration.VpcConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfiguration' }})
    
