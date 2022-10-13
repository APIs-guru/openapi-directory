from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import invalidinputproperty


@dataclass_json
@dataclass
class InvalidInputExceptionInfo:
    exception_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exceptionClassName' }})
    exception_stack: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exceptionStack' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    validation_errors: List[invalidinputproperty.InvalidInputProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationErrors' }})
    
