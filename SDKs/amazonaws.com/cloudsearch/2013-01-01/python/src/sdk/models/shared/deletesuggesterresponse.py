from dataclasses import dataclass, field
from . import *


@dataclass
class DeleteSuggesterResponse:
    r"""DeleteSuggesterResponse
    The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.
    """
    
    suggester: SuggesterStatus = field()
    
