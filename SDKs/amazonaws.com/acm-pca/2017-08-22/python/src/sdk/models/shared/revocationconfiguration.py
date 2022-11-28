from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RevocationConfiguration:
    r"""RevocationConfiguration
    Certificate revocation information used by the <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html\">CreateCertificateAuthority</a> and <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html\">UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html\">RevokeCertificate</a> and <a href=\"https://docs.aws.amazon.com/acm-pca/latest/userguide/revocation-setup.html\">Setting up a certificate revocation method</a> in the <i>AWS Certificate Manager Private Certificate Authority (PCA) User Guide</i>.
    """
    
    crl_configuration: Optional[CrlConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrlConfiguration') }})
    ocsp_configuration: Optional[OcspConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OcspConfiguration') }})
    
