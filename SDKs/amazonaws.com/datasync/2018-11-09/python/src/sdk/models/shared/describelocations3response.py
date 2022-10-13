from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import s3config
from . import s3storageclass_enum


@dataclass_json
@dataclass
class DescribeLocationS3Response:
    agent_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentArns' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationArn' }})
    location_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationUri' }})
    s3_config: Optional[s3config.S3Config] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Config' }})
    s3_storage_class: Optional[s3storageclass_enum.S3StorageClassEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3StorageClass' }})
    
