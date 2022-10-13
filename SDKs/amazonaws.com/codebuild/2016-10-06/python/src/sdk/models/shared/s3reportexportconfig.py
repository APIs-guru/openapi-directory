from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reportpackagingtype_enum


@dataclass_json
@dataclass
class S3ReportExportConfig:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    bucket_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketOwner' }})
    encryption_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionDisabled' }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    packaging: Optional[reportpackagingtype_enum.ReportPackagingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packaging' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
