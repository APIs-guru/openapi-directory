from dataclasses import dataclass, field
from . import *


@dataclass
class GetIdentityNotificationAttributesResponse:
    r"""GetIdentityNotificationAttributesResponse
    Represents the notification attributes for a list of identities.
    """
    
    notification_attributes: dict[str, IdentityNotificationAttributes] = field()
    
