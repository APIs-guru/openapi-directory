from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operatingsystem_enum
from . import buildstatus_enum


@dataclass_json
@dataclass
class Build:
    build_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildArn' }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildId' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    operating_system: Optional[operatingsystem_enum.OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    size_on_disk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeOnDisk' }})
    status: Optional[buildstatus_enum.BuildStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
