from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import suggestionmatch


@dataclass_json
@dataclass
class SuggestModel:
    found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'found' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    suggestions: Optional[List[suggestionmatch.SuggestionMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestions' }})
    
