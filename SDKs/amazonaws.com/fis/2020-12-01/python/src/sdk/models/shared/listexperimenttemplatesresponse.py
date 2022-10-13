from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import experimenttemplatesummary


@dataclass_json
@dataclass
class ListExperimentTemplatesResponse:
    experiment_templates: Optional[List[experimenttemplatesummary.ExperimentTemplateSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experimentTemplates' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
