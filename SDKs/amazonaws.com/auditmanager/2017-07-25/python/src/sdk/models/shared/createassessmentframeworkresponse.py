from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import framework


@dataclass_json
@dataclass
class CreateAssessmentFrameworkResponse:
    framework: Optional[framework.Framework] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'framework' }})
    
