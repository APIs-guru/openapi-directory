from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectionHTTPParameters:
    r"""ConnectionHTTPParameters
    Contains additional parameters for the connection.
    """
    
    body_parameters: Optional[List[ConnectionBodyParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BodyParameters') }})
    header_parameters: Optional[List[ConnectionHeaderParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HeaderParameters') }})
    query_string_parameters: Optional[List[ConnectionQueryStringParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryStringParameters') }})
    
