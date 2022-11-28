from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class EventCategoriesMap:
    r"""EventCategoriesMap
    An event source type, accompanied by one or more event category names.
    """
    
    event_categories: Optional[List[str]] = field(default=None)
    source_type: Optional[str] = field(default=None)
    
