from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEntityRecognizersResponse:
    entity_recognizer_properties_list: Optional[List[EntityRecognizerProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityRecognizerPropertiesList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
