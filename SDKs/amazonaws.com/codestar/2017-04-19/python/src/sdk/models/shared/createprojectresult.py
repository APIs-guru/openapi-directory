from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateProjectResult:
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    project_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectTemplateId') }})
    
