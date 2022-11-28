from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostQueryQueryParams:
    one_property: str = field(metadata={'query_param': { 'field_name': '1_property', 'style': 'form', 'explode': True }})
    one_property_value: str = field(metadata={'query_param': { 'field_name': '1_property.value', 'style': 'form', 'explode': True }})
    p_limit: float = field(metadata={'query_param': { 'field_name': 'p.limit', 'style': 'form', 'explode': True }})
    path: str = field(metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    

@dataclass
class PostQueryRequest:
    query_params: PostQueryQueryParams = field()
    

@dataclass
class PostQueryResponse:
    content_type: str = field()
    status_code: int = field()
    post_query_default_application_json_string: Optional[str] = field(default=None)
    
