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
class DescribeLocationObjectStorageResponse:
    r"""DescribeLocationObjectStorageResponse
    DescribeLocationObjectStorageResponse
    """
    
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessKey') }})
    agent_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationArn') }})
    location_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationUri') }})
    server_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerPort') }})
    server_protocol: Optional[ObjectStorageServerProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerProtocol') }})
    
