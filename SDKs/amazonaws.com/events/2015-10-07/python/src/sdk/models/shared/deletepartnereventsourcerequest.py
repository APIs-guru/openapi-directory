from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeletePartnerEventSourceRequest:
    account: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Account') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
