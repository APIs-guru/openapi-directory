from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAccessPreviewResponse:
    access_preview: AccessPreview = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPreview') }})
    
