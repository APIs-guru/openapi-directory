from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotifyEmailType:
    r"""NotifyEmailType
    The notify email type.
    """
    
    subject: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    html_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HtmlBody') }})
    text_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextBody') }})
    
