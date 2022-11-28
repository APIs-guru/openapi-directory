from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PostConfigAemHealthCheckServletQueryParams:
    bundles_ignored: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'bundles.ignored', 'style': 'form', 'explode': True }})
    bundles_ignored_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bundles.ignored@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclass
class PostConfigAemHealthCheckServletRequest:
    query_params: PostConfigAemHealthCheckServletQueryParams = field()
    

@dataclass
class PostConfigAemHealthCheckServletResponse:
    content_type: str = field()
    status_code: int = field()
    
