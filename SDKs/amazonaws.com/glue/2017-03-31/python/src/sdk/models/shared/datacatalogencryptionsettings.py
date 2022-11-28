from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataCatalogEncryptionSettings:
    r"""DataCatalogEncryptionSettings
    Contains configuration information for maintaining Data Catalog security.
    """
    
    connection_password_encryption: Optional[ConnectionPasswordEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionPasswordEncryption') }})
    encryption_at_rest: Optional[EncryptionAtRest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAtRest') }})
    
