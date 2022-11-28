from dataclasses import dataclass, field
from . import *


@dataclass
class InvalidationBatch:
    r"""InvalidationBatch
    An invalidation batch.
    """
    
    caller_reference: str = field()
    paths: Paths = field()
    
