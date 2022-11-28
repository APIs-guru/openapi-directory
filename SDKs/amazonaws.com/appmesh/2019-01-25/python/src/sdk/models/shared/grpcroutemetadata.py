from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcRouteMetadata:
    r"""GrpcRouteMetadata
    An object that represents the match metadata for the route.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    invert: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invert') }})
    match: Optional[GrpcRouteMetadataMatchMethod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
