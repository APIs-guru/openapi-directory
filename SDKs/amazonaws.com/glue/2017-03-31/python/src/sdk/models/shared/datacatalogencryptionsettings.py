from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import connectionpasswordencryption
from . import encryptionatrest


@dataclass_json
@dataclass
class DataCatalogEncryptionSettings:
    connection_password_encryption: Optional[connectionpasswordencryption.ConnectionPasswordEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionPasswordEncryption' }})
    encryption_at_rest: Optional[encryptionatrest.EncryptionAtRest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionAtRest' }})
    
