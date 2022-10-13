from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errordetail


@dataclass_json
@dataclass
class ColumnError:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnName' }})
    error: Optional[errordetail.ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    
