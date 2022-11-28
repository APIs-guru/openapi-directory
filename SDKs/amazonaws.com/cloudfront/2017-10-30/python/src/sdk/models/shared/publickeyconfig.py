from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PublicKeyConfig:
    r"""PublicKeyConfig
    Information about a public key you add to CloudFront to use with features like field-level encryption.
    """
    
    caller_reference: str = field()
    encoded_key: str = field()
    name: str = field()
    comment: Optional[str] = field(default=None)
    
