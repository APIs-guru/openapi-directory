from dataclasses import dataclass, field
from . import *


@dataclass
class DeleteIndexFieldResponse:
    r"""DeleteIndexFieldResponse
    The result of a <code><a>DeleteIndexField</a></code> request.
    """
    
    index_field: IndexFieldStatus = field()
    
