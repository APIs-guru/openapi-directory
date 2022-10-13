from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import keywordinputtype_enum


@dataclass_json
@dataclass
class SourceKeyword:
    keyword_input_type: Optional[keywordinputtype_enum.KeywordInputTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywordInputType' }})
    keyword_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywordValue' }})
    
