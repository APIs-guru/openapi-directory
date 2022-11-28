from dataclasses import dataclass, field
from . import *


@dataclass
class DeleteIndexFieldResponse:
    r"""DeleteIndexFieldResponse
    A response message that contains the status of a deleted index field.
    """
    
    index_field: IndexFieldStatus = field()
    
