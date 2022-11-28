from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListCustomVerificationEmailTemplatesResponse:
    r"""ListCustomVerificationEmailTemplatesResponse
    A paginated list of custom verification email templates.
    """
    
    custom_verification_email_templates: Optional[List[CustomVerificationEmailTemplate]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
