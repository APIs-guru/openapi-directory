from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FailureException:
    exception_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExceptionDescription' }})
    exception_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExceptionName' }})
    
