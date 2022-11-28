from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPEndpointConfiguration:
    r"""HTTPEndpointConfiguration
    Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data.
    """
    
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }})
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessKey') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
