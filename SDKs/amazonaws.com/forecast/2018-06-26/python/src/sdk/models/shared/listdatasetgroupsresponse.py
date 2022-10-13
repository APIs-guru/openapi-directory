from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetgroupsummary


@dataclass_json
@dataclass
class ListDatasetGroupsResponse:
    dataset_groups: Optional[List[datasetgroupsummary.DatasetGroupSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetGroups' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
