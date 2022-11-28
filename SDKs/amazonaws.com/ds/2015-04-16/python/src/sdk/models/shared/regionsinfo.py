from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegionsInfo:
    r"""RegionsInfo
    Provides information about the Regions that are configured for multi-Region replication.
    """
    
    additional_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalRegions') }})
    primary_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryRegion') }})
    
