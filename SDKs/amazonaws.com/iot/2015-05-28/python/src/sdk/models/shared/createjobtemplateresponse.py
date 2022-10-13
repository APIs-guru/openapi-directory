from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateJobTemplateResponse:
    job_template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTemplateArn' }})
    job_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTemplateId' }})
    
