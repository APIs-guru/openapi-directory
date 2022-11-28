from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateExperimentTemplateStopConditionInput:
    r"""UpdateExperimentTemplateStopConditionInput
    Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.
    """
    
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
