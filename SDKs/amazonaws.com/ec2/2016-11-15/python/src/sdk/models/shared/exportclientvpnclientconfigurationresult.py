from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportClientVpnClientConfigurationResult:
    client_configuration: Optional[str] = field(default=None)
    
