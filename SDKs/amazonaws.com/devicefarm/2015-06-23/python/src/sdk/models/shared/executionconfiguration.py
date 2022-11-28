from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExecutionConfiguration:
    r"""ExecutionConfiguration
    Represents configuration information about a test run, such as the execution timeout (in minutes).
    """
    
    accounts_cleanup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountsCleanup') }})
    app_packages_cleanup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPackagesCleanup') }})
    job_timeout_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTimeoutMinutes') }})
    skip_app_resign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipAppResign') }})
    video_capture: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoCapture') }})
    
