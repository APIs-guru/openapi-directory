from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import processorparameter
from . import processortype_enum


@dataclass_json
@dataclass
class Processor:
    parameters: Optional[List[processorparameter.ProcessorParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    type: processortype_enum.ProcessorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
