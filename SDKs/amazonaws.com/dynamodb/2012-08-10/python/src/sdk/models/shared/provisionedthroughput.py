from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProvisionedThroughput:
    r"""ProvisionedThroughput
    <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html\">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
    """
    
    read_capacity_units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadCapacityUnits') }})
    write_capacity_units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteCapacityUnits') }})
    
