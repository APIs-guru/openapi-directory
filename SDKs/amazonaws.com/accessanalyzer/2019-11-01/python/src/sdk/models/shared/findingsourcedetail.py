from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FindingSourceDetail:
    r"""FindingSourceDetail
    Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.
    """
    
    access_point_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPointArn') }})
    
