from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GlobalResourcesSharedModelsStringTranslationStateEnum(str, Enum):
    ORIGINAL = "Original"
    REQUESTED = "Requested"
    PROCESSING = "Processing"
    PROCESSED = "Processed"
    VALIDATED = "Validated"
    INVALIDATED = "Invalidated"
    REQUEST_PENDING = "RequestPending"
    CREATE_PENDING = "CreatePending"


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsStringTranslation:
    r"""GlobalResourcesSharedModelsStringTranslation
    A translation of a string in a specific language
    """
    
    string_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringValue') }, 'form': { 'field_name': 'StringValue' }})
    author_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorId') }, 'form': { 'field_name': 'AuthorId' }})
    language_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageId') }, 'form': { 'field_name': 'LanguageId' }})
    state: Optional[GlobalResourcesSharedModelsStringTranslationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }, 'form': { 'field_name': 'State' }})
    string_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringId') }, 'form': { 'field_name': 'StringId' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }, 'form': { 'field_name': 'Timestamp' }})
    
