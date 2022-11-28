from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsCloudMapInstanceAttribute:
    r"""AwsCloudMapInstanceAttribute
    <p>An object that represents the Cloud Map attribute information for your virtual node.</p> <note> <p>AWS Cloud Map is not available in the eu-south-1 Region.</p> </note>
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
