from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import processorparametername_enum


@dataclass_json
@dataclass
class ProcessorParameter:
    parameter_name: processorparametername_enum.ProcessorParameterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterName' }})
    parameter_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterValue' }})
    
