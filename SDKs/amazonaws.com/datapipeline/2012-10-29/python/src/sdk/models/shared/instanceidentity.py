from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstanceIdentity:
    r"""InstanceIdentity
    <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html\">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p>
    """
    
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    
