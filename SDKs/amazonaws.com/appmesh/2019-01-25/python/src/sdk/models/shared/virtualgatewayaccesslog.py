from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualgatewayfileaccesslog


@dataclass_json
@dataclass
class VirtualGatewayAccessLog:
    file: Optional[virtualgatewayfileaccesslog.VirtualGatewayFileAccessLog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    
