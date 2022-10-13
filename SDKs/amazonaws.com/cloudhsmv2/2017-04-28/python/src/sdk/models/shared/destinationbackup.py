from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DestinationBackup:
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBackup' }})
    source_cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceCluster' }})
    source_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceRegion' }})
    
