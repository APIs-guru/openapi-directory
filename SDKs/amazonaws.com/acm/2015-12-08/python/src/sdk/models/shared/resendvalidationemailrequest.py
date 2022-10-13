from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResendValidationEmailRequest:
    certificate_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateArn' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    validation_domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationDomain' }})
    
