from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListenerTLSFileCertificate:
    r"""ListenerTLSFileCertificate
    An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites\">Transport Layer Security (TLS)</a>.
    """
    
    certificate_chain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateChain') }})
    private_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    
