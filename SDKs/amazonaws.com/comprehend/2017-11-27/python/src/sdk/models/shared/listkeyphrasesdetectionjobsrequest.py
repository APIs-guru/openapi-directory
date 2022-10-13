from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyphrasesdetectionjobfilter


@dataclass_json
@dataclass
class ListKeyPhrasesDetectionJobsRequest:
    filter: Optional[keyphrasesdetectionjobfilter.KeyPhrasesDetectionJobFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
