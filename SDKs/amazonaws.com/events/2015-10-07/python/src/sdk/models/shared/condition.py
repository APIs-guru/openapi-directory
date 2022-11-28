from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Condition:
    r"""Condition
    <p>A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain Amazon Web Services organization. The string must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the ID of the Amazon Web Services organization. Following is an example value for <code>Condition</code>:</p> <p> <code>'{\"Type\" : \"StringEquals\", \"Key\": \"aws:PrincipalOrgID\", \"Value\": \"o-1234567890\"}'</code> </p>
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
