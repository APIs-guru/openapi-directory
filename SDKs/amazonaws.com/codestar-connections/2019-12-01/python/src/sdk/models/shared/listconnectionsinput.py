from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import providertype_enum


@dataclass_json
@dataclass
class ListConnectionsInput:
    host_arn_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostArnFilter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    provider_type_filter: Optional[providertype_enum.ProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderTypeFilter' }})
    
