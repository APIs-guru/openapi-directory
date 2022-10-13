from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import archivestate_enum


@dataclass_json
@dataclass
class ListArchivesRequest:
    event_source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSourceArn' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamePrefix' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    state: Optional[archivestate_enum.ArchiveStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
