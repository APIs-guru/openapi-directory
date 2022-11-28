from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsTranslationSetSourceString:
    r"""GlobalResourcesSharedModelsTranslationSetSourceString
    Information needed to translate a string in a translation set
    """
    
    description_for_translator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DescriptionForTranslator') }})
    language_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageID') }})
    string_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringID') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringValue') }})
    
