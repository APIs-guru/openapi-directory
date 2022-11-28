from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Account:
    r"""Account
    An AWS account that is the administrator account of or a member of a behavior graph.
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    email_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailAddress') }})
    
