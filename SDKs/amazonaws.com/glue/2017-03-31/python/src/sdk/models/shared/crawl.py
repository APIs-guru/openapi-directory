from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import crawlstate_enum


@dataclass_json
@dataclass
class Crawl:
    completed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    log_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogGroup' }})
    log_stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogStream' }})
    started_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[crawlstate_enum.CrawlStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
