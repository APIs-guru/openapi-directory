from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetExclusionsPreviewResponse:
    preview_status: PreviewStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewStatus') }})
    exclusion_previews: Optional[List[ExclusionPreview]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionPreviews') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
