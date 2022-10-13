from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Certificates:
    aws_hardware_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsHardwareCertificate' }})
    cluster_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterCertificate' }})
    cluster_csr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterCsr' }})
    hsm_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmCertificate' }})
    manufacturer_hardware_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManufacturerHardwareCertificate' }})
    
