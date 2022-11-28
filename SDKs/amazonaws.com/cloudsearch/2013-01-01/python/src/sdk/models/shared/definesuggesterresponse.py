from dataclasses import dataclass, field
from . import *


@dataclass
class DefineSuggesterResponse:
    r"""DefineSuggesterResponse
    The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.
    """
    
    suggester: SuggesterStatus = field()
    
