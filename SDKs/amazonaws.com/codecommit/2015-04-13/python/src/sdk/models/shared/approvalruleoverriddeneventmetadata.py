from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import overridestatus_enum


@dataclass_json
@dataclass
class ApprovalRuleOverriddenEventMetadata:
    override_status: Optional[overridestatus_enum.OverrideStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideStatus' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    
