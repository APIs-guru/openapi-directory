from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SerDeInfo:
    r"""SerDeInfo
    Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    serialization_library: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SerializationLibrary') }})
    
