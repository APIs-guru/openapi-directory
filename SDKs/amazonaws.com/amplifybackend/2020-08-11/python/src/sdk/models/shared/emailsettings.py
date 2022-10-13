from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmailSettings:
    email_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailMessage' }})
    email_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailSubject' }})
    
