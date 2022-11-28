from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Cors:
    r"""Cors
    Represents a CORS configuration. Supported only for HTTP APIs. See <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html\">Configuring CORS</a> for more information.
    """
    
    allow_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowCredentials') }})
    allow_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowHeaders') }})
    allow_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowMethods') }})
    allow_origins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowOrigins') }})
    expose_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExposeHeaders') }})
    max_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAge') }})
    
