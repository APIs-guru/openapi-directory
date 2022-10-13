from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import exportformat_enum
from . import s3ssealgorithm_enum


@dataclass_json
@dataclass
class ExportTableToPointInTimeInput:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    export_format: Optional[exportformat_enum.ExportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportFormat' }})
    export_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    s3_bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Bucket' }})
    s3_bucket_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketOwner' }})
    s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Prefix' }})
    s3_sse_algorithm: Optional[s3ssealgorithm_enum.S3SseAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3SseAlgorithm' }})
    s3_sse_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3SseKmsKeyId' }})
    table_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableArn' }})
    
