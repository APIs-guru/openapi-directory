from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lastcrawlstatus_enum


@dataclass_json
@dataclass
class LastCrawlInfo:
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    log_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogGroup' }})
    log_stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogStream' }})
    message_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessagePrefix' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[lastcrawlstatus_enum.LastCrawlStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
