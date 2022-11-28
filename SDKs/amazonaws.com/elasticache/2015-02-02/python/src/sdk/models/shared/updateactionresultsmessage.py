from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class UpdateActionResultsMessage:
    processed_update_actions: Optional[List[ProcessedUpdateAction]] = field(default=None)
    unprocessed_update_actions: Optional[List[UnprocessedUpdateAction]] = field(default=None)
    
