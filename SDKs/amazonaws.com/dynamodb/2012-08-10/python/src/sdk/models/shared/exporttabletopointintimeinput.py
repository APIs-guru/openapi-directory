from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportTableToPointInTimeInput:
    s3_bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    table_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableArn') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    export_format: Optional[ExportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportFormat') }})
    export_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    s3_bucket_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketOwner') }})
    s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Prefix') }})
    s3_sse_algorithm: Optional[S3SseAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3SseAlgorithm') }})
    s3_sse_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3SseKmsKeyId') }})
    
