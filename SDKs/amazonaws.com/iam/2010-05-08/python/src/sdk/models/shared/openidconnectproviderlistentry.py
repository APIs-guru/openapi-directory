from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OpenIDConnectProviderListEntry:
    r"""OpenIDConnectProviderListEntry
    Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider.
    """
    
    arn: Optional[str] = field(default=None)
    
