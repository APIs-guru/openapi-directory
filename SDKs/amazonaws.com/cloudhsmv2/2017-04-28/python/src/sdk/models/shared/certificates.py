from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Certificates:
    r"""Certificates
    Contains one or more certificates or a certificate signing request (CSR).
    """
    
    aws_hardware_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsHardwareCertificate') }})
    cluster_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterCertificate') }})
    cluster_csr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterCsr') }})
    hsm_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmCertificate') }})
    manufacturer_hardware_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManufacturerHardwareCertificate') }})
    
