from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttributeValue:
    r"""AttributeValue
    AttributeValue can be <code>String</code>, <code>Number</code>, <code>Binary</code>, <code>StringSet</code>, <code>NumberSet</code>, <code>BinarySet</code>.
    """
    
    b: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('B') }})
    bs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BS') }})
    n: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('N') }})
    ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NS') }})
    s: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S') }})
    ss: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SS') }})
    
