from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import progressupdatestreamsummary


@dataclass_json
@dataclass
class ListProgressUpdateStreamsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    progress_update_stream_summary_list: Optional[List[progressupdatestreamsummary.ProgressUpdateStreamSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressUpdateStreamSummaryList' }})
    
