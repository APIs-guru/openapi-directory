from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import environmentimage
from . import languagetype_enum


@dataclass_json
@dataclass
class EnvironmentLanguage:
    images: Optional[List[environmentimage.EnvironmentImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    language: Optional[languagetype_enum.LanguageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    
