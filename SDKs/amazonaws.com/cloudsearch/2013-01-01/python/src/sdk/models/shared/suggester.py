from dataclasses import dataclass, field
from . import *


@dataclass
class Suggester:
    r"""Suggester
    Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. 
    """
    
    document_suggester_options: DocumentSuggesterOptions = field()
    suggester_name: str = field()
    
