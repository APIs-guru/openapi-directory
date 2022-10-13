from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import certificatedescription


@dataclass_json
@dataclass
class DescribeCertificateResponse:
    certificate_description: Optional[certificatedescription.CertificateDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateDescription' }})
    
