from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPEndpointRequestConfiguration:
    r"""HTTPEndpointRequestConfiguration
    The configuration of the HTTP endpoint request.
    """
    
    common_attributes: Optional[List[HTTPEndpointCommonAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommonAttributes') }})
    content_encoding: Optional[ContentEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentEncoding') }})
    
