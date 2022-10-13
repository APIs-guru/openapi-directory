from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import emailcontent
from . import emailrecipients


@dataclass_json
@dataclass
class EmailConfiguration:
    content: Optional[emailcontent.EmailContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    recipients: emailrecipients.EmailRecipients = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipients' }})
    
