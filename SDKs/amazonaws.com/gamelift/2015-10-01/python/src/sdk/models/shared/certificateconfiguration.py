from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import certificatetype_enum


@dataclass_json
@dataclass
class CertificateConfiguration:
    certificate_type: certificatetype_enum.CertificateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateType' }})
    
