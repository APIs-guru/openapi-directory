from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import exportsummary


@dataclass_json
@dataclass
class ListExportsOutput:
    export_summaries: Optional[List[exportsummary.ExportSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
