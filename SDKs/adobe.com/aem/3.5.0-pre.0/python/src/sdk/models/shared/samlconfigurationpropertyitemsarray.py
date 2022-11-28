from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class SamlConfigurationPropertyItemsArray:
    description: Optional[str] = field(default=None)
    is_set: Optional[bool] = field(default=None)
    name: Optional[str] = field(default=None)
    optional: Optional[bool] = field(default=None)
    type: Optional[int] = field(default=None)
    values: Optional[List[str]] = field(default=None)
    
