from dataclasses import dataclass, field



@dataclass
class VerifyDomainIdentityResponse:
    r"""VerifyDomainIdentityResponse
    Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES.
    """
    
    verification_token: str = field()
    
