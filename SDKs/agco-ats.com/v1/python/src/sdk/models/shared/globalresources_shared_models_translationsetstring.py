from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsTranslationSetString:
    r"""GlobalResourcesSharedModelsTranslationSetString
    The resulting translation in a translation set.  is the  to which the string will be translated.
    """
    
    language_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageID') }, 'form': { 'field_name': 'LanguageID' }})
    string_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringID') }, 'form': { 'field_name': 'StringID' }})
    translation_set_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranslationSetId') }, 'form': { 'field_name': 'TranslationSetId' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringValue') }, 'form': { 'field_name': 'StringValue' }})
    
