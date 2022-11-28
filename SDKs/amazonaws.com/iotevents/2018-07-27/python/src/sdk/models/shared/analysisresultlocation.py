from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AnalysisResultLocation:
    r"""AnalysisResultLocation
    Contains information that you can use to locate the field in your detector model that the analysis result references.
    """
    
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
