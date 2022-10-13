from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualserviceprovider


@dataclass_json
@dataclass
class VirtualServiceSpec:
    provider: Optional[virtualserviceprovider.VirtualServiceProvider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    
