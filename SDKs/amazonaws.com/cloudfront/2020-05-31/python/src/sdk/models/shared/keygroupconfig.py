from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class KeyGroupConfig:
    r"""KeyGroupConfig
    <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">CloudFront signed URLs and signed cookies</a>.</p>
    """
    
    items: List[str] = field()
    name: str = field()
    comment: Optional[str] = field(default=None)
    
