from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClientCertAuthSettings:
    r"""ClientCertAuthSettings
    Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations. 
    """
    
    ocsp_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OCSPUrl') }})
    
