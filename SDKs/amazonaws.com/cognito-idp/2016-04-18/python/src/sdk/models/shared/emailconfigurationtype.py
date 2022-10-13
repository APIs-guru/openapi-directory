from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import emailsendingaccounttype_enum


@dataclass_json
@dataclass
class EmailConfigurationType:
    configuration_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationSet' }})
    email_sending_account: Optional[emailsendingaccounttype_enum.EmailSendingAccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailSendingAccount' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'From' }})
    reply_to_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplyToEmailAddress' }})
    source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceArn' }})
    
