from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomRule:
    r"""CustomRule
     Describes a custom rewrite or redirect rule. 
    """
    
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
