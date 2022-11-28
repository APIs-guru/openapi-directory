from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WithdrawByoipCidrRequest:
    cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cidr') }})
    
