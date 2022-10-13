from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobtemplatesummary


@dataclass_json
@dataclass
class ListJobTemplatesResponse:
    job_templates: Optional[List[jobtemplatesummary.JobTemplateSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTemplates' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
