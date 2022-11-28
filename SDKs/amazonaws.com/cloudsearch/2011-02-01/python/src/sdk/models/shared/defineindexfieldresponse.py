from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class DefineIndexFieldResponse:
    r"""DefineIndexFieldResponse
    A response message that contains the status of an updated index field.
    """
    
    index_field: IndexFieldStatus = field()
    
