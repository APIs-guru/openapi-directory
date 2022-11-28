from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimestreamAction:
    r"""TimestreamAction
    The Timestream rule action writes attributes (measures) from an MQTT message into an Amazon Timestream table. For more information, see the <a href=\"https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html\">Timestream</a> topic rule action documentation.
    """
    
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseName') }})
    dimensions: List[TimestreamDimension] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    timestamp: Optional[TimestreamTimestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
