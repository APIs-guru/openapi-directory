from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIModelsAPIError:
    developer_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeveloperMessage' }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    more_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MoreInfo' }})
    user_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserMessage' }})
    
