from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsStringDefinition:
    r"""GlobalResourcesSharedModelsStringDefinition
    The definition of a string to be translated
    """
    
    description_for_translator: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DescriptionForTranslator') }})
    do_not_translate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DoNotTranslate') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    parameter_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterCount') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    translations: Optional[List[GlobalResourcesSharedModelsStringTranslation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Translations') }})
    
