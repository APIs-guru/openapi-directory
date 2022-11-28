from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class UpdateSynonymOptionsResponse:
    r"""UpdateSynonymOptionsResponse
    A response message that contains the status of updated synonym options.
    """
    
    synonyms: SynonymOptionsStatus = field()
    
