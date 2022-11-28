from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateGlobalSecondaryIndexAction:
    r"""UpdateGlobalSecondaryIndexAction
    Represents the new provisioned throughput settings to be applied to a global secondary index.
    """
    
    index_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    provisioned_throughput: ProvisionedThroughput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    
