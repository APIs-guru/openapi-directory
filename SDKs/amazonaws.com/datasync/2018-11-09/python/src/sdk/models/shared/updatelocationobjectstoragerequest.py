from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateLocationObjectStorageRequest:
    location_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationArn') }})
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessKey') }})
    agent_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretKey') }})
    server_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerPort') }})
    server_protocol: Optional[ObjectStorageServerProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerProtocol') }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    
