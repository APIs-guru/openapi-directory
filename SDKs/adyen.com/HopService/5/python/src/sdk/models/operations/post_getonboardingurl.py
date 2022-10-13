from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetOnboardingURLSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostGetOnboardingURLSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostGetOnboardingURLSecurity:
    option1: Optional[PostGetOnboardingURLSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostGetOnboardingURLSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostGetOnboardingURLRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostGetOnboardingURLSecurity = field(default=None)
    

@dataclass
class PostGetOnboardingURLResponse:
    content_type: str = field(default=None)
    get_onboarding_url_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
