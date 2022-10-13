from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MutualTLSAuthentication:
    truststore_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truststoreUri' }})
    truststore_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truststoreVersion' }})
    truststore_warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truststoreWarnings' }})
    
