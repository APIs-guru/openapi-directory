from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import certificateoptions


@dataclass_json
@dataclass
class UpdateCertificateOptionsRequest:
    certificate_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateArn' }})
    options: certificateoptions.CertificateOptions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    
