from dataclasses import dataclass, field
from . import *


@dataclass
class EncryptionEntity:
    r"""EncryptionEntity
    Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications. 
    """
    
    field_patterns: FieldPatterns = field()
    provider_id: str = field()
    public_key_id: str = field()
    
