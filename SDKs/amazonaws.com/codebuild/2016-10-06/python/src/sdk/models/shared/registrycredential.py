from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import credentialprovidertype_enum


@dataclass_json
@dataclass
class RegistryCredential:
    credential: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential' }})
    credential_provider: credentialprovidertype_enum.CredentialProviderTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentialProvider' }})
    
