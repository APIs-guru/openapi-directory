from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmailContent:
    additional_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalMessage' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    
