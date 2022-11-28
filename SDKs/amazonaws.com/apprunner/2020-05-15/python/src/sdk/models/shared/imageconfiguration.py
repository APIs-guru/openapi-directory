from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImageConfiguration:
    r"""ImageConfiguration
    Describes the configuration that AWS App Runner uses to run an App Runner service using an image pulled from a source image repository.
    """
    
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    runtime_environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeEnvironmentVariables') }})
    start_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartCommand') }})
    
