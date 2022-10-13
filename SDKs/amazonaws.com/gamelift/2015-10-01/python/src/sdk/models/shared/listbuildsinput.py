from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import buildstatus_enum


@dataclass_json
@dataclass
class ListBuildsInput:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[buildstatus_enum.BuildStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
