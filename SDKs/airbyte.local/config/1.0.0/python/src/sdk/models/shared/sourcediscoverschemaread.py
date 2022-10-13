from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import airbytecatalog
from . import synchronousjobread


@dataclass_json
@dataclass
class SourceDiscoverSchemaRead:
    catalog: Optional[airbytecatalog.AirbyteCatalog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog' }})
    job_info: synchronousjobread.SynchronousJobRead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobInfo' }})
    
