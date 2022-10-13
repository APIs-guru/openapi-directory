from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasource


@dataclass_json
@dataclass
class DatasetImportJobSummary:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_source: Optional[datasource.DataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    dataset_import_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetImportJobArn' }})
    dataset_import_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetImportJobName' }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
