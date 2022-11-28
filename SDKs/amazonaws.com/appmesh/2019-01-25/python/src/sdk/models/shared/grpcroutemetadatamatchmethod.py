from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcRouteMetadataMatchMethod:
    r"""GrpcRouteMetadataMatchMethod
    An object that represents the match method. Specify one of the match values.
    """
    
    exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exact') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    range: Optional[MatchRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    
