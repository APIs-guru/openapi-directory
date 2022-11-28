from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateContinuousBackupsInput:
    point_in_time_recovery_specification: PointInTimeRecoverySpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PointInTimeRecoverySpecification') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
