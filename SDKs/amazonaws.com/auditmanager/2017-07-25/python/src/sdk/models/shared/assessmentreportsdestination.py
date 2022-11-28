from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssessmentReportsDestination:
    r"""AssessmentReportsDestination
     The location in which Audit Manager saves assessment reports for the given assessment. 
    """
    
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_type: Optional[AssessmentReportDestinationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationType') }})
    
