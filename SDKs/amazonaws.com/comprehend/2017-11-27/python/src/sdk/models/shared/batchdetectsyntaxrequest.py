from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import syntaxlanguagecode_enum


@dataclass_json
@dataclass
class BatchDetectSyntaxRequest:
    language_code: syntaxlanguagecode_enum.SyntaxLanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    text_list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextList' }})
    
