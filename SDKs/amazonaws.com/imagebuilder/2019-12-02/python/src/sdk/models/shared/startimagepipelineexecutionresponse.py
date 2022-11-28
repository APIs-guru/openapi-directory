from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartImagePipelineExecutionResponse:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    image_build_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageBuildVersionArn') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
