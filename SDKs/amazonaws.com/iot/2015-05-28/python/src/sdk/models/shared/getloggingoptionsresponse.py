from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loglevel_enum


@dataclass_json
@dataclass
class GetLoggingOptionsResponse:
    log_level: Optional[loglevel_enum.LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logLevel' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
