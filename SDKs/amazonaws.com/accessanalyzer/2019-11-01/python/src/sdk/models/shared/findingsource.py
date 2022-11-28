from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FindingSource:
    r"""FindingSource
    The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
    """
    
    type: FindingSourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    detail: Optional[FindingSourceDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    
