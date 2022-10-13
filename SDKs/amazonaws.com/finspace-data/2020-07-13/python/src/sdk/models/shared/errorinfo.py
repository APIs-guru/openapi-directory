from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import errorcategory_enum


@dataclass_json
@dataclass
class ErrorInfo:
    error_category: Optional[errorcategory_enum.ErrorCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCategory' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    
