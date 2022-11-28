from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomEmailLambdaVersionConfigType:
    r"""CustomEmailLambdaVersionConfigType
    A custom email sender Lambda configuration type.
    """
    
    lambda_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaArn') }})
    lambda_version: CustomEmailSenderLambdaVersionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaVersion') }})
    
