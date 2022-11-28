from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DiscoveredResource:
    r"""DiscoveredResource
    Object representing the on-premises resource being migrated.
    """
    
    configuration_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
