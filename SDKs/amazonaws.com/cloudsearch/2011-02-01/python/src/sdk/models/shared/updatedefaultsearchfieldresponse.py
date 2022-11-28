from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class UpdateDefaultSearchFieldResponse:
    r"""UpdateDefaultSearchFieldResponse
    A response message that contains the status of an updated default search field.
    """
    
    default_search_field: DefaultSearchFieldStatus = field()
    
