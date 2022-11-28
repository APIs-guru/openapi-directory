from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetBackendAPIModelsResponse:
    models: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Models') }})
    status: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
