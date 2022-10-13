from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import codeconfigurationvalues
from . import configurationsource_enum


@dataclass_json
@dataclass
class CodeConfiguration:
    code_configuration_values: Optional[codeconfigurationvalues.CodeConfigurationValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeConfigurationValues' }})
    configuration_source: configurationsource_enum.ConfigurationSourceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationSource' }})
    
