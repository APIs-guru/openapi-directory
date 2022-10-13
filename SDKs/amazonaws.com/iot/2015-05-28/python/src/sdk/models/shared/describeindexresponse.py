from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import indexstatus_enum


@dataclass_json
@dataclass
class DescribeIndexResponse:
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexName' }})
    index_status: Optional[indexstatus_enum.IndexStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexStatus' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    
