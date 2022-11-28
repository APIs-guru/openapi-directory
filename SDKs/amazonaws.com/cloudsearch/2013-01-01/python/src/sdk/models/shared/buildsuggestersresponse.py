from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class BuildSuggestersResponse:
    r"""BuildSuggestersResponse
    The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.
    """
    
    field_names: Optional[List[str]] = field(default=None)
    
