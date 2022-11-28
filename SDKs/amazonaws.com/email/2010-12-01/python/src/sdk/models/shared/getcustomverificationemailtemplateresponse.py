from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCustomVerificationEmailTemplateResponse:
    r"""GetCustomVerificationEmailTemplateResponse
    The content of the custom verification email template.
    """
    
    failure_redirection_url: Optional[str] = field(default=None)
    from_email_address: Optional[str] = field(default=None)
    success_redirection_url: Optional[str] = field(default=None)
    template_content: Optional[str] = field(default=None)
    template_name: Optional[str] = field(default=None)
    template_subject: Optional[str] = field(default=None)
    
