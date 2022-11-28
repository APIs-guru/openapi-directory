from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Assessment:
    r"""Assessment
     An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework. 
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    aws_account: Optional[AwsAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccount') }})
    framework: Optional[AssessmentFramework] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('framework') }})
    metadata: Optional[AssessmentMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
