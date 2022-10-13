from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import exportdataformat_enum
from . import exportfilter


@dataclass_json
@dataclass
class StartExportTaskRequest:
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    export_data_format: Optional[List[exportdataformat_enum.ExportDataFormatEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportDataFormat' }})
    filters: Optional[List[exportfilter.ExportFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
