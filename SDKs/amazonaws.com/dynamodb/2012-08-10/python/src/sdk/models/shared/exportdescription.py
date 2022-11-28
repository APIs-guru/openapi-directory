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
class ExportDescription:
    r"""ExportDescription
    Represents the properties of the exported table.
    """
    
    billed_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BilledSizeBytes') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    export_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportArn') }})
    export_format: Optional[ExportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportFormat') }})
    export_manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportManifest') }})
    export_status: Optional[ExportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportStatus') }})
    export_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureCode') }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureMessage') }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCount') }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    s3_bucket_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketOwner') }})
    s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Prefix') }})
    s3_sse_algorithm: Optional[S3SseAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3SseAlgorithm') }})
    s3_sse_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3SseKmsKeyId') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableArn') }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableId') }})
    
