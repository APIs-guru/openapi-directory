from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OasSupportSharedModelsTranslationKey:
    r"""OasSupportSharedModelsTranslationKey
    A translation key to map the relationship of keyNames, usually for ODX, and string Ids
    """
    
    key_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyName') }, 'form': { 'field_name': 'KeyName' }})
    string_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringID') }, 'form': { 'field_name': 'StringID' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }, 'form': { 'field_name': 'ID' }})
    
