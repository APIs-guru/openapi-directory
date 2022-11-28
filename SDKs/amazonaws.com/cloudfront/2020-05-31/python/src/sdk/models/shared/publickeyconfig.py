from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PublicKeyConfig:
    r"""PublicKeyConfig
    Configuration information about a public key that you can use with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">signed URLs and signed cookies</a>, or with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html\">field-level encryption</a>.
    """
    
    caller_reference: str = field()
    encoded_key: str = field()
    name: str = field()
    comment: Optional[str] = field(default=None)
    
