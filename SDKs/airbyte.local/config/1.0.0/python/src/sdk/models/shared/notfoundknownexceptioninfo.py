from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NotFoundKnownExceptionInfo:
    exception_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exceptionClassName' }})
    exception_stack: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exceptionStack' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    root_cause_exception_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootCauseExceptionClassName' }})
    root_cause_exception_stack: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootCauseExceptionStack' }})
    
