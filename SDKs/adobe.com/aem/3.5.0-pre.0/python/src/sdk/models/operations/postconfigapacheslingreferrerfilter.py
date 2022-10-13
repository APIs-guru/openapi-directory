from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostConfigApacheSlingReferrerFilterQueryParams:
    allow_empty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allow.empty', 'style': 'form', 'explode': True }})
    allow_empty_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allow.empty@TypeHint', 'style': 'form', 'explode': True }})
    allow_hosts: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allow.hosts', 'style': 'form', 'explode': True }})
    allow_hosts_regexp: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allow.hosts.regexp', 'style': 'form', 'explode': True }})
    allow_hosts_regexp_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allow.hosts.regexp@TypeHint', 'style': 'form', 'explode': True }})
    allow_hosts_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allow.hosts@TypeHint', 'style': 'form', 'explode': True }})
    filter_methods: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter.methods', 'style': 'form', 'explode': True }})
    filter_methods_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter.methods@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclass
class PostConfigApacheSlingReferrerFilterRequest:
    query_params: PostConfigApacheSlingReferrerFilterQueryParams = field(default=None)
    

@dataclass
class PostConfigApacheSlingReferrerFilterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
