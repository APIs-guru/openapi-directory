from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostSetupBeneficiarySecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostSetupBeneficiarySecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostSetupBeneficiarySecurity:
    option1: Optional[PostSetupBeneficiarySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostSetupBeneficiarySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostSetupBeneficiaryRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostSetupBeneficiarySecurity = field(default=None)
    

@dataclass
class PostSetupBeneficiaryResponse:
    content_type: str = field(default=None)
    service_error: Optional[Any] = field(default=None)
    setup_beneficiary_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
