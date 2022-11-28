from dataclasses import dataclass, field
from . import *


@dataclass
class DescribeSynonymOptionsResponse:
    r"""DescribeSynonymOptionsResponse
    A response message that contains the synonym options for a search domain.
    """
    
    synonyms: SynonymOptionsStatus = field()
    
