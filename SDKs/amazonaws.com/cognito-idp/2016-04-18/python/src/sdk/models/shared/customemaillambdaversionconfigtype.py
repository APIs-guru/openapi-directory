from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import customemailsenderlambdaversiontype_enum


@dataclass_json
@dataclass
class CustomEmailLambdaVersionConfigType:
    lambda_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaArn' }})
    lambda_version: customemailsenderlambdaversiontype_enum.CustomEmailSenderLambdaVersionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaVersion' }})
    
