from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsTranslationSetStatistics:
    language_i_ds: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageIDs' }})
    string_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringCount' }})
    
