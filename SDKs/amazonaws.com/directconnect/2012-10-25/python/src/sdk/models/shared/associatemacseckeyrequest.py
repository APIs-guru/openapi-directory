from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssociateMacSecKeyRequest:
    connection_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    cak: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cak') }})
    ckn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ckn') }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretARN') }})
    
