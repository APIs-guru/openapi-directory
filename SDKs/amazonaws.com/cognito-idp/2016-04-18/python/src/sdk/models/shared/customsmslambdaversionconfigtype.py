from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import customsmssenderlambdaversiontype_enum


@dataclass_json
@dataclass
class CustomSmsLambdaVersionConfigType:
    lambda_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaArn' }})
    lambda_version: customsmssenderlambdaversiontype_enum.CustomSmsSenderLambdaVersionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaVersion' }})
    
