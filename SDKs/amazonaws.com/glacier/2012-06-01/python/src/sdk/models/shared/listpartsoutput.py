from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partlistelement


@dataclass_json
@dataclass
class ListPartsOutput:
    archive_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchiveDescription' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    multipart_upload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultipartUploadId' }})
    part_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartSizeInBytes' }})
    parts: Optional[List[partlistelement.PartListElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parts' }})
    vault_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VaultARN' }})
    
