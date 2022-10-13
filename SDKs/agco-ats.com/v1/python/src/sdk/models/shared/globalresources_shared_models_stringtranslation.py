from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    author_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorId' }, 'form': { 'field_name': 'AuthorId' }})
    language_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageId' }, 'form': { 'field_name': 'LanguageId' }})
    state: Optional[GlobalResourcesSharedModelsStringTranslationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }, 'form': { 'field_name': 'State' }})
    string_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringId' }, 'form': { 'field_name': 'StringId' }})
    string_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringValue' }, 'form': { 'field_name': 'StringValue' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp' }, 'form': { 'field_name': 'Timestamp' }})
    
