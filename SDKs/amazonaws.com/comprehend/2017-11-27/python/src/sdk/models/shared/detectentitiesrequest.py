from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import languagecode_enum


@dataclass_json
@dataclass
class DetectEntitiesRequest:
    endpoint_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointArn' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    
