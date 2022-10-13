from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NotifyEmailType:
    html_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HtmlBody' }})
    subject: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    text_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextBody' }})
    
