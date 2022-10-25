from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostAuthorizablesQueryParams:
    authorizable_id: str = field(default=None, metadata={'query_param': { 'field_name': 'authorizableId', 'style': 'form', 'explode': True }})
    create_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createGroup', 'style': 'form', 'explode': True }})
    create_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createUser', 'style': 'form', 'explode': True }})
    intermediate_path: str = field(default=None, metadata={'query_param': { 'field_name': 'intermediatePath', 'style': 'form', 'explode': True }})
    profile_given_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'profile/givenName', 'style': 'form', 'explode': True }})
    rep_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rep:password', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAuthorizablesRequest:
    query_params: PostAuthorizablesQueryParams = field(default=None)
    

@dataclass
class PostAuthorizablesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_authorizables_default_text_html_string: Optional[str] = field(default=None)
    
