from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import applicationinfo


@dataclass_json
@dataclass
class CreateApplicationResponse:
    application_info: Optional[applicationinfo.ApplicationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationInfo' }})
    
