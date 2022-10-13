from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import streamfile


@dataclass_json
@dataclass
class StreamInfo:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    files: Optional[List[streamfile.StreamFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamArn' }})
    stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamId' }})
    stream_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamVersion' }})
    
