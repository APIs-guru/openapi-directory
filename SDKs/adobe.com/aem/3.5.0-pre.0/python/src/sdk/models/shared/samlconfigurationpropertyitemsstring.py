from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SamlConfigurationPropertyItemsString:
    description: Optional[str] = field(default=None)
    is_set: Optional[bool] = field(default=None)
    name: Optional[str] = field(default=None)
    optional: Optional[bool] = field(default=None)
    type: Optional[int] = field(default=None)
    value: Optional[str] = field(default=None)
    
