from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import completionreport
from . import tag
from . import datarepositorytasktype_enum


@dataclass_json
@dataclass
class CreateDataRepositoryTaskRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Paths' }})
    report: completionreport.CompletionReport = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Report' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: datarepositorytasktype_enum.DataRepositoryTaskTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
