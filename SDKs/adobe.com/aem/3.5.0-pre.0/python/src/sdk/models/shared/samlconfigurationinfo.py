from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class SamlConfigurationInfo:
    bundle_location: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    pid: Optional[str] = field(default=None)
    properties: Optional[SamlConfigurationProperties] = field(default=None)
    service_location: Optional[str] = field(default=None)
    title: Optional[str] = field(default=None)
    
