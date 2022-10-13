from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dominantlanguage


@dataclass_json
@dataclass
class DetectDominantLanguageResponse:
    languages: Optional[List[dominantlanguage.DominantLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Languages' }})
    
