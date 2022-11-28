from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateCloudFormationCollectionFilter:
    r"""UpdateCloudFormationCollectionFilter
     Contains the names of AWS CloudFormation stacks used to update a collection of stacks. You can specify up to 500 AWS CloudFormation stacks.
    """
    
    stack_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackNames') }})
    
