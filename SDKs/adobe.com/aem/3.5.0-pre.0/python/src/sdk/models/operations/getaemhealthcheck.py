from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAemHealthCheckQueryParams:
    combine_tags_or: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'combineTagsOr', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAemHealthCheckRequest:
    query_params: GetAemHealthCheckQueryParams = field()
    

@dataclass
class GetAemHealthCheckResponse:
    content_type: str = field()
    status_code: int = field()
    get_aem_health_check_default_application_json_string: Optional[str] = field(default=None)
    
