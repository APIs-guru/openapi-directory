from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationsummary


@dataclass_json
@dataclass
class ListApplicationsResponse:
    application_summaries: Optional[List[applicationsummary.ApplicationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
