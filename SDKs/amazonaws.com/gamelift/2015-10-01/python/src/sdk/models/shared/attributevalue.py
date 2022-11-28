from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttributeValue:
    r"""AttributeValue
    Values for use in <a>Player</a> attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties.
    """
    
    n: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('N') }})
    s: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S') }})
    sdm: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SDM') }})
    sl: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SL') }})
    
