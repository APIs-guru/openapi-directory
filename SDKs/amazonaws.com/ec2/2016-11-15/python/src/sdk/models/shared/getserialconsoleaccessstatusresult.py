from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSerialConsoleAccessStatusResult:
    serial_console_access_enabled: Optional[bool] = field(default=None)
    
