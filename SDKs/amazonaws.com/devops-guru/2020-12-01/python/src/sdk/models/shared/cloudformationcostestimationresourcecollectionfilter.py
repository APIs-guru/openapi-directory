from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudFormationCostEstimationResourceCollectionFilter:
    r"""CloudFormationCostEstimationResourceCollectionFilter
    Information about an AWS CloudFormation stack used to create a monthly cost estimate for DevOps Guru to analyze AWS resources. The maximum number of stacks you can specify for a cost estimate is one. The estimate created is for the cost to analyze the AWS resources defined by the stack. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html\">Stacks</a> in the <i>AWS CloudFormation User Guide</i>.
    """
    
    stack_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackNames') }})
    
