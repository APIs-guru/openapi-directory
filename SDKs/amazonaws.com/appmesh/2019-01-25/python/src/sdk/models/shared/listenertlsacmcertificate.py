from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListenerTLSAcmCertificate:
    r"""ListenerTLSAcmCertificate
    An object that represents an AWS Certicate Manager (ACM) certificate.
    """
    
    certificate_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateArn') }})
    
