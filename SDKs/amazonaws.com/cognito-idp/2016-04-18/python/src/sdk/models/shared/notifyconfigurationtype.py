from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotifyConfigurationType:
    r"""NotifyConfigurationType
    The notify configuration type.
    """
    
    source_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceArn') }})
    block_email: Optional[NotifyEmailType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockEmail') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('From') }})
    mfa_email: Optional[NotifyEmailType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MfaEmail') }})
    no_action_email: Optional[NotifyEmailType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoActionEmail') }})
    reply_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplyTo') }})
    
