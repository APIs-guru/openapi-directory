from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyphrase


@dataclass_json
@dataclass
class BatchDetectKeyPhrasesItemResult:
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Index' }})
    key_phrases: Optional[List[keyphrase.KeyPhrase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyPhrases' }})
    
