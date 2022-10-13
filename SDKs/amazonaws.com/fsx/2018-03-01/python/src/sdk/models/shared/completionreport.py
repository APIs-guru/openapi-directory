from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reportformat_enum
from . import reportscope_enum


@dataclass_json
@dataclass
class CompletionReport:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    format: Optional[reportformat_enum.ReportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    scope: Optional[reportscope_enum.ReportScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scope' }})
    
