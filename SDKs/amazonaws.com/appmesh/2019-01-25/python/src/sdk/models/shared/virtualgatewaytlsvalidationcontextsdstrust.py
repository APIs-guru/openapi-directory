from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualGatewayTLSValidationContextSdsTrust:
    r"""VirtualGatewayTLSValidationContextSdsTrust
    An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html\">TLS documentation</a> for more info.
    """
    
    secret_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretName') }})
    
