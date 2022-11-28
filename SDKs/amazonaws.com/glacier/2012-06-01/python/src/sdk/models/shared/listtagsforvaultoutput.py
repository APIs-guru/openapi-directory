from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListTagsForVaultOutput:
    r"""ListTagsForVaultOutput
    Contains the Amazon S3 Glacier response to your request.
    """
    
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
