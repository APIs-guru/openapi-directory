from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UploadListElement:
    archive_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchiveDescription' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    multipart_upload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultipartUploadId' }})
    part_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartSizeInBytes' }})
    vault_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VaultARN' }})
    
