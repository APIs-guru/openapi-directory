from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import backupstate_enum
from . import tag


@dataclass_json
@dataclass
class Backup:
    backup_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupId' }})
    backup_state: Optional[backupstate_enum.BackupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupState' }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    copy_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delete_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    never_expires: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NeverExpires' }})
    source_backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBackup' }})
    source_cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceCluster' }})
    source_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceRegion' }})
    tag_list: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagList' }})
    
