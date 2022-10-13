from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class AuthorizationCodesSharedModelsValidationFieldTypeEnum(str, Enum):
    BOOLEAN = "Boolean"
    FLOAT = "Float"
    INT = "Int"
    STRING_CASE_INSENSITIVE = "StringCaseInsensitive"
    STRING_CASE_SENSITIVE = "StringCaseSensitive"


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsValidationField:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: AuthorizationCodesSharedModelsValidationFieldTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
