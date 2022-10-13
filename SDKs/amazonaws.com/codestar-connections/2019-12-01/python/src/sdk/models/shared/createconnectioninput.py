from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import providertype_enum
from . import tag


@dataclass_json
@dataclass
class CreateConnectionInput:
    connection_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionName' }})
    host_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostArn' }})
    provider_type: Optional[providertype_enum.ProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderType' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
