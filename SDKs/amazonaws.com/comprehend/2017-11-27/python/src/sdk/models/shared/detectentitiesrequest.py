from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectEntitiesRequest:
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    endpoint_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointArn') }})
    language_code: Optional[LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    
