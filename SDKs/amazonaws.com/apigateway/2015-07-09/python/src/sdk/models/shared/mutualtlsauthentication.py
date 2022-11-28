from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MutualTLSAuthentication:
    r"""MutualTLSAuthentication
    If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
    """
    
    truststore_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truststoreUri') }})
    truststore_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truststoreVersion') }})
    truststore_warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truststoreWarnings') }})
    
