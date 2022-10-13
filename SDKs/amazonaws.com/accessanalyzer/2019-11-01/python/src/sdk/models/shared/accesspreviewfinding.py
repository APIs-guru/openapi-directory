from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import findingchangetype_enum
from . import findingstatus_enum
from . import resourcetype_enum
from . import findingsource
from . import findingstatus_enum


@dataclass_json
@dataclass
class AccessPreviewFinding:
    action: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    change_type: findingchangetype_enum.FindingChangeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeType' }})
    condition: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    existing_finding_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'existingFindingId' }})
    existing_finding_status: Optional[findingstatus_enum.FindingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'existingFindingStatus' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPublic' }})
    principal: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principal' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    resource_owner_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceOwnerAccount' }})
    resource_type: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    sources: Optional[List[findingsource.FindingSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    status: findingstatus_enum.FindingStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
