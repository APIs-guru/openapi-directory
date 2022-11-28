from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsLanguage:
    r"""GlobalResourcesSharedModelsLanguage
    A language used for string translations.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }, 'form': { 'field_name': 'Description' }})
    locale_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocaleId') }, 'form': { 'field_name': 'LocaleId' }})
    is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsDeleted') }, 'form': { 'field_name': 'IsDeleted' }})
    
