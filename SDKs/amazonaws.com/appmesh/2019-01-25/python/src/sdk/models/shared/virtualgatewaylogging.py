from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualgatewayaccesslog


@dataclass_json
@dataclass
class VirtualGatewayLogging:
    access_log: Optional[virtualgatewayaccesslog.VirtualGatewayAccessLog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLog' }})
    
