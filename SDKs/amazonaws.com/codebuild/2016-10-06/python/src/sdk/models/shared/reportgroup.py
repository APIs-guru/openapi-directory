from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reportexportconfig
from . import reportgroupstatustype_enum
from . import tag
from . import reporttype_enum


@dataclass_json
@dataclass
class ReportGroup:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    export_config: Optional[reportexportconfig.ReportExportConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportConfig' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[reportgroupstatustype_enum.ReportGroupStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[reporttype_enum.ReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
