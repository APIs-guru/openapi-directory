from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errordetail


@dataclass_json
@dataclass
class TableVersionError:
    error_detail: Optional[errordetail.ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorDetail' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionId' }})
    
