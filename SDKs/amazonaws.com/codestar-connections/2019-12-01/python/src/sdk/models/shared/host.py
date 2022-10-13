from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import providertype_enum
from . import vpcconfiguration


@dataclass_json
@dataclass
class Host:
    host_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostArn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    provider_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderEndpoint' }})
    provider_type: Optional[providertype_enum.ProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderType' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    vpc_configuration: Optional[vpcconfiguration.VpcConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfiguration' }})
    
