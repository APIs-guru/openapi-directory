from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EmailConfigurationType:
    r"""EmailConfigurationType
    <p>The email configuration type. </p> <note> <p>Amazon Cognito has specific regions for use with Amazon SES. For more information on the supported regions, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html\">Email Settings for Amazon Cognito User Pools</a>.</p> </note>
    """
    
    configuration_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSet') }})
    email_sending_account: Optional[EmailSendingAccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSendingAccount') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('From') }})
    reply_to_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplyToEmailAddress') }})
    source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceArn') }})
    
