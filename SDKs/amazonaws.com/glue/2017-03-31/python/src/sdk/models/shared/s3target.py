from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Target:
    r"""S3Target
    Specifies a data store in Amazon Simple Storage Service (Amazon S3).
    """
    
    connection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionName') }})
    exclusions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Exclusions') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    sample_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleSize') }})
    
