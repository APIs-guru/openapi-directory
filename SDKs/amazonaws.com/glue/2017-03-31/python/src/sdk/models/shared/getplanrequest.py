from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetPlanRequest:
    mapping: List[MappingEntry] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mapping') }})
    source: CatalogEntry = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    additional_plan_options_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalPlanOptionsMap') }})
    language: Optional[LanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Language') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    sinks: Optional[List[CatalogEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sinks') }})
    
