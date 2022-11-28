from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualGatewayListenerTLSAcmCertificate:
    r"""VirtualGatewayListenerTLSAcmCertificate
    An object that represents an Certificate Manager certificate.
    """
    
    certificate_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateArn') }})
    
