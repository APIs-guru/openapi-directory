from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIModelsNotification:
    is_body_html: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsBodyHtml') }, 'form': { 'field_name': 'IsBodyHtml' }})
    message_body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageBody') }, 'form': { 'field_name': 'MessageBody' }})
    subject: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }, 'form': { 'field_name': 'Subject' }})
    to_addresses: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('To_Addresses') }, 'form': { 'field_name': 'To_Addresses' }})
    cc_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CC_Addresses') }, 'form': { 'field_name': 'CC_Addresses' }})
    
