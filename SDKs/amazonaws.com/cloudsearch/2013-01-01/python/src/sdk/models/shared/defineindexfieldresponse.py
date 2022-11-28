from dataclasses import dataclass, field
from . import *


@dataclass
class DefineIndexFieldResponse:
    r"""DefineIndexFieldResponse
    The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.
    """
    
    index_field: IndexFieldStatus = field()
    
