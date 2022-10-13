from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import evaluationmetrics
from . import gluetable
from . import transformparameters
from . import schemacolumn
from . import transformstatustype_enum
from . import transformencryption
from . import workertype_enum


@dataclass_json
@dataclass
class GetMlTransformResponse:
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    evaluation_metrics: Optional[evaluationmetrics.EvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationMetrics' }})
    glue_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlueVersion' }})
    input_record_tables: Optional[List[gluetable.GlueTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputRecordTables' }})
    label_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelCount' }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_capacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCapacity' }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRetries' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    number_of_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfWorkers' }})
    parameters: Optional[transformparameters.TransformParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    schema: Optional[List[schemacolumn.SchemaColumn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schema' }})
    status: Optional[transformstatustype_enum.TransformStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    transform_encryption: Optional[transformencryption.TransformEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformEncryption' }})
    transform_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformId' }})
    worker_type: Optional[workertype_enum.WorkerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerType' }})
    
