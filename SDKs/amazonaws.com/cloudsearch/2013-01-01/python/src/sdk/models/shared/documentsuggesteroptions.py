from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DocumentSuggesterOptions:
    r"""DocumentSuggesterOptions
    Options for a search suggester.
    """
    
    source_field: str = field()
    fuzzy_matching: Optional[SuggesterFuzzyMatchingEnum] = field(default=None)
    sort_expression: Optional[str] = field(default=None)
    
