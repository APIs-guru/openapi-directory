from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualGatewayListenerTLSSdsCertificate:
    r"""VirtualGatewayListenerTLSSdsCertificate
    An object that represents the virtual gateway's listener's Secret Discovery Service certificate.The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh<a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html\">TLS documentation</a> for more info. 
    """
    
    secret_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretName') }})
    
