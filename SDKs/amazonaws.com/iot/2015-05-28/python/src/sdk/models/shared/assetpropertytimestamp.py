from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetPropertyTimestamp:
    r"""AssetPropertyTimestamp
    An asset property timestamp entry containing the following information.
    """
    
    time_in_seconds: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeInSeconds') }})
    offset_in_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetInNanos') }})
    
