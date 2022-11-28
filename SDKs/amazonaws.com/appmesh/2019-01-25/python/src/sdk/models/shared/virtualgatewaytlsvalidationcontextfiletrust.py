from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualGatewayTLSValidationContextFileTrust:
    r"""VirtualGatewayTLSValidationContextFileTrust
    An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
    """
    
    certificate_chain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateChain') }})
    
