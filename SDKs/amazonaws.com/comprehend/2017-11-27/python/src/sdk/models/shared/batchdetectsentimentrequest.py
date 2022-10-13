from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import languagecode_enum


@dataclass_json
@dataclass
class BatchDetectSentimentRequest:
    language_code: languagecode_enum.LanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    text_list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextList' }})
    
