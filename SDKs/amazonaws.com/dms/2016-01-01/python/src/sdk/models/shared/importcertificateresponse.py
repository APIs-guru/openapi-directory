from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import certificate


@dataclass_json
@dataclass
class ImportCertificateResponse:
    certificate: Optional[certificate.Certificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    
