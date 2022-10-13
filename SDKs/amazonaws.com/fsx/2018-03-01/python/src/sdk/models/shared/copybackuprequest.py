from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CopyBackupRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    copy_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyTags' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    source_backup_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBackupId' }})
    source_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceRegion' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
