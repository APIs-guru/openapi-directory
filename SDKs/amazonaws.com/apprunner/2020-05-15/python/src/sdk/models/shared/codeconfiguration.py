from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeConfiguration:
    r"""CodeConfiguration
    Describes the configuration that AWS App Runner uses to build and run an App Runner service from a source code repository.
    """
    
    configuration_source: ConfigurationSourceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSource') }})
    code_configuration_values: Optional[CodeConfigurationValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeConfigurationValues') }})
    
