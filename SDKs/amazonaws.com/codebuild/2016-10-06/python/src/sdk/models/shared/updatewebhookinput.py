from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import webhookbuildtype_enum
from . import webhookfilter


@dataclass_json
@dataclass
class UpdateWebhookInput:
    branch_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchFilter' }})
    build_type: Optional[webhookbuildtype_enum.WebhookBuildTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildType' }})
    filter_groups: Optional[List[List[webhookfilter.WebhookFilter]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterGroups' }})
    project_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectName' }})
    rotate_secret: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotateSecret' }})
    
