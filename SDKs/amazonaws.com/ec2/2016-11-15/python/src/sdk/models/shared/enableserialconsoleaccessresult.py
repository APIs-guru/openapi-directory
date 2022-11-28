from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EnableSerialConsoleAccessResult:
    serial_console_access_enabled: Optional[bool] = field(default=None)
    
