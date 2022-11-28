from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class UpdateStemmingOptionsResponse:
    r"""UpdateStemmingOptionsResponse
    A response message that contains the status of updated stemming options.
    """
    
    stems: StemmingOptionsStatus = field()
    
