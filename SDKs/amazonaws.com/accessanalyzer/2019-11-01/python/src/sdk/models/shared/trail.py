from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Trail:
    r"""Trail
    Contains details about the CloudTrail trail being analyzed to generate a policy.
    """
    
    cloud_trail_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudTrailArn') }})
    all_regions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allRegions') }})
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    
