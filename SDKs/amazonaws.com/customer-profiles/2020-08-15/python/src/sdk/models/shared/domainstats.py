from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DomainStats:
    r"""DomainStats
    Usage-specific statistics about the domain.
    """
    
    metering_profile_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeteringProfileCount') }})
    object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectCount') }})
    profile_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfileCount') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalSize') }})
    
