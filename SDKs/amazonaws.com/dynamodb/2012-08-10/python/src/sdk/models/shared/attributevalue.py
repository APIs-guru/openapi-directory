from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttributeValue:
    r"""AttributeValue
    <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes\">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
    """
    
    b: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('B') }})
    bool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BOOL') }})
    bs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BS') }})
    l: Optional[List[AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('L') }})
    m: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('M') }})
    n: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('N') }})
    ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NS') }})
    null: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NULL') }})
    s: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S') }})
    ss: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SS') }})
    
