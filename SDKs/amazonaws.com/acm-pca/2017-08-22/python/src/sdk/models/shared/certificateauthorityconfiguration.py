from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateAuthorityConfiguration:
    r"""CertificateAuthorityConfiguration
    Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html\">CreateCertificateAuthority</a> action. 
    """
    
    key_algorithm: KeyAlgorithmEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyAlgorithm') }})
    signing_algorithm: SigningAlgorithmEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithm') }})
    subject: Asn1Subject = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    csr_extensions: Optional[CsrExtensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsrExtensions') }})
    
