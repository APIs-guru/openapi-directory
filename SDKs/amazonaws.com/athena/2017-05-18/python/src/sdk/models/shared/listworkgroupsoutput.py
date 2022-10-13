from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workgroupsummary


@dataclass_json
@dataclass
class ListWorkGroupsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    work_groups: Optional[List[workgroupsummary.WorkGroupSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkGroups' }})
    
