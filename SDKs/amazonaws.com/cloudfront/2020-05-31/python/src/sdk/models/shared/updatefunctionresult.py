from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class UpdateFunctionResult:
    function_summary: Optional[FunctionSummary] = field(default=None)
    
