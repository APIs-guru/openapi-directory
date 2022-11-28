from dataclasses import dataclass, field
from enum import Enum
from . import *


@dataclass
class IdentityMailFromDomainAttributes:
    r"""IdentityMailFromDomainAttributes
    Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).
    """
    
    behavior_on_mx_failure: BehaviorOnMxFailureEnum = field()
    mail_from_domain: str = field()
    mail_from_domain_status: CustomMailFromStatusEnum = field()
    
