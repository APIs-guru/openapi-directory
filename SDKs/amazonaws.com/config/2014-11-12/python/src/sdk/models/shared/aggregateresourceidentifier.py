from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourcetype_enum


@dataclass_json
@dataclass
class AggregateResourceIdentifier:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceName' }})
    resource_type: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    source_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceAccountId' }})
    source_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceRegion' }})
    
