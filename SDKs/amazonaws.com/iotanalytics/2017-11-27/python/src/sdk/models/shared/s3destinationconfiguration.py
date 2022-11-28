from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3DestinationConfiguration:
    r"""S3DestinationConfiguration
    Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).
    """
    
    bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    glue_configuration: Optional[GlueConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glueConfiguration') }})
    
