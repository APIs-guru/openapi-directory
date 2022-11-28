from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EphemeralStorage:
    r"""EphemeralStorage
    <p>The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html\">Fargate task storage</a> in the <i>Amazon ECS User Guide for Fargate</i>.</p> <note> <p>This parameter is only supported for tasks hosted on Fargate using platform version <code>1.4.0</code> or later.</p> </note>
    """
    
    size_in_gi_b: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInGiB') }})
    
