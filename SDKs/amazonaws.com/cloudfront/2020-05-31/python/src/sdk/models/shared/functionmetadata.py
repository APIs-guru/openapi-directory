from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class FunctionMetadata:
    r"""FunctionMetadata
    Contains metadata about a CloudFront function.
    """
    
    function_arn: str = field()
    last_modified_time: datetime = field()
    created_time: Optional[datetime] = field(default=None)
    stage: Optional[FunctionStageEnum] = field(default=None)
    
