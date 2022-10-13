from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import providertype_enum
from . import tag
from . import vpcconfiguration


@dataclass_json
@dataclass
class CreateHostInput:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    provider_endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderEndpoint' }})
    provider_type: providertype_enum.ProviderTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderType' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_configuration: Optional[vpcconfiguration.VpcConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfiguration' }})
    
