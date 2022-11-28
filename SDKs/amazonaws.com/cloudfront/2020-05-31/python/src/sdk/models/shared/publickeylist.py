from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PublicKeyList:
    r"""PublicKeyList
    A list of public keys that you can use with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">signed URLs and signed cookies</a>, or with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html\">field-level encryption</a>.
    """
    
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[PublicKeySummary]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
