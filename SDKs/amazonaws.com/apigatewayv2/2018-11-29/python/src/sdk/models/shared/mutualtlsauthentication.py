from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MutualTLSAuthentication:
    truststore_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruststoreUri') }})
    truststore_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruststoreVersion') }})
    truststore_warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruststoreWarnings') }})
    
