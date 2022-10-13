from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import certificatetransparencyloggingpreference_enum


@dataclass_json
@dataclass
class CertificateOptions:
    certificate_transparency_logging_preference: Optional[certificatetransparencyloggingpreference_enum.CertificateTransparencyLoggingPreferenceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateTransparencyLoggingPreference' }})
    
