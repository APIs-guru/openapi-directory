from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AuthorizationCodesSharedModelsValidationFieldTypeEnum(str, Enum):
    BOOLEAN = "Boolean"
    FLOAT = "Float"
    INT = "Int"
    STRING_CASE_INSENSITIVE = "StringCaseInsensitive"
    STRING_CASE_SENSITIVE = "StringCaseSensitive"


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsValidationField:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: AuthorizationCodesSharedModelsValidationFieldTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
