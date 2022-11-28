from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPPathMatch:
    r"""HTTPPathMatch
    An object representing the path to match in the request.
    """
    
    exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exact') }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    
