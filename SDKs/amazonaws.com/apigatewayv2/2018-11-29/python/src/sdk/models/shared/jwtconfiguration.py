from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JwtConfiguration:
    r"""JwtConfiguration
    Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
    """
    
    audience: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Audience') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Issuer') }})
    
