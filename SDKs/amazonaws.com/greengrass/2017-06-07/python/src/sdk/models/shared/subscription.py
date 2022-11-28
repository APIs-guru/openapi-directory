from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Subscription:
    r"""Subscription
    Information about a subscription.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    subject: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    target: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    
