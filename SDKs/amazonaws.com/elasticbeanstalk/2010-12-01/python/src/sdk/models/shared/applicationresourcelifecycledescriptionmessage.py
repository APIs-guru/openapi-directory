from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ApplicationResourceLifecycleDescriptionMessage:
    application_name: Optional[str] = field(default=None)
    resource_lifecycle_config: Optional[ApplicationResourceLifecycleConfig] = field(default=None)
    
