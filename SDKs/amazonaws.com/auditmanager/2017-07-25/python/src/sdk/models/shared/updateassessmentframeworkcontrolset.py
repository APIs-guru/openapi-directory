from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateAssessmentFrameworkControlSet:
    r"""UpdateAssessmentFrameworkControlSet
     A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This does not contain the control set ID. 
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    controls: Optional[List[CreateAssessmentFrameworkControl]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controls') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
