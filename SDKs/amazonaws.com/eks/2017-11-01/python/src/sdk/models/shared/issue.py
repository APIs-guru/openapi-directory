from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nodegroupissuecode_enum


@dataclass_json
@dataclass
class Issue:
    code: Optional[nodegroupissuecode_enum.NodegroupIssueCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    resource_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceIds' }})
    
