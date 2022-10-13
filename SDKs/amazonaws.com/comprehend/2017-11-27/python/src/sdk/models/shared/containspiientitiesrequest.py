from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import languagecode_enum


@dataclass_json
@dataclass
class ContainsPiiEntitiesRequest:
    language_code: languagecode_enum.LanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    
