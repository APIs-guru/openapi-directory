from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContextDataType:
    r"""ContextDataType
    Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
    """
    
    http_headers: List[HTTPHeader] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpHeaders') }})
    ip_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    server_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    server_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerPath') }})
    encoded_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncodedData') }})
    
