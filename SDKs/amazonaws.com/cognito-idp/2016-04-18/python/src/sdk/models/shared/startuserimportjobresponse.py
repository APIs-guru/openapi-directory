from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userimportjobtype


@dataclass_json
@dataclass
class StartUserImportJobResponse:
    user_import_job: Optional[userimportjobtype.UserImportJobType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserImportJob' }})
    
