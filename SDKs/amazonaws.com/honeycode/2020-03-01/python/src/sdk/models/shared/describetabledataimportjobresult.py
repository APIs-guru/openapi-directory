from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import tabledataimportjobmetadata
from . import tabledataimportjobstatus_enum


@dataclass_json
@dataclass
class DescribeTableDataImportJobResult:
    job_metadata: tabledataimportjobmetadata.TableDataImportJobMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobMetadata' }})
    job_status: tabledataimportjobstatus_enum.TableDataImportJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobStatus' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
