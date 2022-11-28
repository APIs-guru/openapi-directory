from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class UpdateStopwordOptionsResponse:
    r"""UpdateStopwordOptionsResponse
    A response message that contains the status of updated stopword options.
    """
    
    stopwords: StopwordOptionsStatus = field()
    
