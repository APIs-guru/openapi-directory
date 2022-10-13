from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import clientcertauthsettings
from . import certificatetype_enum


@dataclass_json
@dataclass
class RegisterCertificateRequest:
    certificate_data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateData' }})
    client_cert_auth_settings: Optional[clientcertauthsettings.ClientCertAuthSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientCertAuthSettings' }})
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    type: Optional[certificatetype_enum.CertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
