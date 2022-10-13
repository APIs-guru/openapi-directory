from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inputdataconfig
from . import outputdataconfig
from . import jobstatus_enum


@dataclass_json
@dataclass
class ImportJobProperties:
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    datastore_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreId' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_data_config: inputdataconfig.InputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    job_output_data_config: Optional[outputdataconfig.OutputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobOutputDataConfig' }})
    job_status: jobstatus_enum.JobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    submit_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmitTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
