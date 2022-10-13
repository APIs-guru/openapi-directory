from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datarepositorytaskfailuredetails
from . import datarepositorytasklifecycle_enum
from . import completionreport
from . import datarepositorytaskstatus
from . import tag
from . import datarepositorytasktype_enum


@dataclass_json
@dataclass
class DataRepositoryTask:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_details: Optional[datarepositorytaskfailuredetails.DataRepositoryTaskFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureDetails' }})
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    lifecycle: datarepositorytasklifecycle_enum.DataRepositoryTaskLifecycleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lifecycle' }})
    paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Paths' }})
    report: Optional[completionreport.CompletionReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Report' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARN' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[datarepositorytaskstatus.DataRepositoryTaskStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    task_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskId' }})
    type: datarepositorytasktype_enum.DataRepositoryTaskTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
