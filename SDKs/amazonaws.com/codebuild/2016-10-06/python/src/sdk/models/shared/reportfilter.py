from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportFilter:
    r"""ReportFilter
     A filter used to return reports with the status specified by the input <code>status</code> parameter. 
    """
    
    status: Optional[ReportStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
