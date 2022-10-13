from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListenerTLSFileCertificate:
    certificate_chain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateChain' }})
    private_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKey' }})
    
