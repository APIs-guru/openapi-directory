from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3location


@dataclass_json
@dataclass
class Script:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    script_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScriptArn' }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScriptId' }})
    size_on_disk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeOnDisk' }})
    storage_location: Optional[s3location.S3Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageLocation' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
