from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersGetQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    has_role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hasRole', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersGetRequest:
    query_params: UsersGetQueryParams = field(default=None)
    

@dataclass
class UsersGetResponse:
    api_paged_response_api_models_user_: Optional[shared.APIPagedResponseAPIModelsUser] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
