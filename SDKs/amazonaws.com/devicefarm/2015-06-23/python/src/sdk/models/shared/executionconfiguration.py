from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExecutionConfiguration:
    accounts_cleanup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountsCleanup' }})
    app_packages_cleanup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appPackagesCleanup' }})
    job_timeout_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTimeoutMinutes' }})
    skip_app_resign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipAppResign' }})
    video_capture: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoCapture' }})
    
