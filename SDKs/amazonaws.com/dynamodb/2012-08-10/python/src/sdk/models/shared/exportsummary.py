from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import exportstatus_enum


@dataclass_json
@dataclass
class ExportSummary:
    export_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportArn' }})
    export_status: Optional[exportstatus_enum.ExportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportStatus' }})
    
