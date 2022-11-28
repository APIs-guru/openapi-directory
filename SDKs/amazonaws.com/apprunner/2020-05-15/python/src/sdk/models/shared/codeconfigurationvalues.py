from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeConfigurationValues:
    r"""CodeConfigurationValues
    Describes the basic configuration needed for building and running an AWS App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository.
    """
    
    runtime: RuntimeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Runtime') }})
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildCommand') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    runtime_environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeEnvironmentVariables') }})
    start_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartCommand') }})
    
