from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsaccount
from . import assessmentframework
from . import assessmentmetadata


@dataclass_json
@dataclass
class Assessment:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    aws_account: Optional[awsaccount.AwsAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsAccount' }})
    framework: Optional[assessmentframework.AssessmentFramework] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'framework' }})
    metadata: Optional[assessmentmetadata.AssessmentMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
