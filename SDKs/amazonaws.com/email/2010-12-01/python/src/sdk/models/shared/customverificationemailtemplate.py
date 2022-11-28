from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CustomVerificationEmailTemplate:
    r"""CustomVerificationEmailTemplate
    Contains information about a custom verification email template.
    """
    
    failure_redirection_url: Optional[str] = field(default=None)
    from_email_address: Optional[str] = field(default=None)
    success_redirection_url: Optional[str] = field(default=None)
    template_name: Optional[str] = field(default=None)
    template_subject: Optional[str] = field(default=None)
    
