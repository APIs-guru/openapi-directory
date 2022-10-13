from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import notifyemailtype
from . import notifyemailtype
from . import notifyemailtype


@dataclass_json
@dataclass
class NotifyConfigurationType:
    block_email: Optional[notifyemailtype.NotifyEmailType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockEmail' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'From' }})
    mfa_email: Optional[notifyemailtype.NotifyEmailType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MfaEmail' }})
    no_action_email: Optional[notifyemailtype.NotifyEmailType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoActionEmail' }})
    reply_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplyTo' }})
    source_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceArn' }})
    
