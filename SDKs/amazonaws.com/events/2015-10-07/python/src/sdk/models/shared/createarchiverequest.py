from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateArchiveRequest:
    archive_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchiveName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    event_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventPattern' }})
    event_source_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSourceArn' }})
    retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetentionDays' }})
    
