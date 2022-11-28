from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateConfiguration:
    r"""CertificateConfiguration
    <p>Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the <a href=\"https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html\">GameLift Server SDK</a> operation <code>GetInstanceCertificate</code>. </p> <p>A fleet's certificate configuration is part of <a>FleetAttributes</a>.</p>
    """
    
    certificate_type: CertificateTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateType') }})
    
