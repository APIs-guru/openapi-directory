from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EmailRecipients:
    r"""EmailRecipients
    <p>Contains the information of one or more recipients who receive the emails.</p> <important> <p>You must <a href=\"https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html\">add the users that receive emails to your AWS SSO store</a>.</p> </important>
    """
    
    to: Optional[List[RecipientDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
