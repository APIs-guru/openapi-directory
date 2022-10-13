from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateApplicationInput:
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    new_application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newApplicationName' }})
    
