from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import resourcetype_enum


@dataclass_json
@dataclass
class AnalyzedResourceSummary:
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    resource_owner_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceOwnerAccount' }})
    resource_type: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
