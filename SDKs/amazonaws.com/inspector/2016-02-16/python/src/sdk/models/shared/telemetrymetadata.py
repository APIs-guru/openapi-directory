from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TelemetryMetadata:
    r"""TelemetryMetadata
    The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.
    """
    
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    message_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageType') }})
    data_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSize') }})
    
