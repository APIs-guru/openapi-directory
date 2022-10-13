from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQueryQueryParams:
    one_property: str = field(default=None, metadata={'query_param': { 'field_name': '1_property', 'style': 'form', 'explode': True }})
    one_property_value: str = field(default=None, metadata={'query_param': { 'field_name': '1_property.value', 'style': 'form', 'explode': True }})
    p_limit: float = field(default=None, metadata={'query_param': { 'field_name': 'p.limit', 'style': 'form', 'explode': True }})
    path: str = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueryRequest:
    query_params: GetQueryQueryParams = field(default=None)
    

@dataclass
class GetQueryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_query_default_application_json_string: Optional[str] = field(default=None)
    
