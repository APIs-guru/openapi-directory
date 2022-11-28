from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Failure:
    r"""Failure
    A failed resource. For a list of common causes, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html\">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
