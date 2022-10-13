from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dnsresponsetype_enum


@dataclass_json
@dataclass
class DNSServiceDiscovery:
    hostname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    response_type: Optional[dnsresponsetype_enum.DNSResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseType' }})
    
