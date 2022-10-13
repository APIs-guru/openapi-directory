from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PostConfigAemPasswordResetQueryParams:
    pwdreset_authorizables: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'pwdreset.authorizables', 'style': 'form', 'explode': True }})
    pwdreset_authorizables_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pwdreset.authorizables@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclass
class PostConfigAemPasswordResetRequest:
    query_params: PostConfigAemPasswordResetQueryParams = field(default=None)
    

@dataclass
class PostConfigAemPasswordResetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
