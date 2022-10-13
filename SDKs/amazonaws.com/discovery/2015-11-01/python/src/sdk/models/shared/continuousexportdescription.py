from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datasource_enum
from . import continuousexportstatus_enum


@dataclass_json
@dataclass
class ContinuousExportDescription:
    data_source: Optional[datasource_enum.DataSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSource' }})
    export_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportId' }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    schema_storage_config: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaStorageConfig' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[continuousexportstatus_enum.ContinuousExportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusDetail' }})
    stop_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
