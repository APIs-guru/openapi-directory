from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateDatasetGroupRequest:
    dataset_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetArns') }})
    dataset_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetGroupArn') }})
    
