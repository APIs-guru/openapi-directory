from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetRecommendationError:
    r"""GetRecommendationError
    <p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p>
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
