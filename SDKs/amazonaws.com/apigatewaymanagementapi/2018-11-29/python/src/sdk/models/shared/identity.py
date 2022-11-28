from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Identity:
    source_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIp') }})
    user_agent: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAgent') }})
    
