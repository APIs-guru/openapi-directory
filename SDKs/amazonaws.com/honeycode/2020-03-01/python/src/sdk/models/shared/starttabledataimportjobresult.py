from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import tabledataimportjobstatus_enum


@dataclass_json
@dataclass
class StartTableDataImportJobResult:
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    job_status: tabledataimportjobstatus_enum.TableDataImportJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobStatus' }})
    
