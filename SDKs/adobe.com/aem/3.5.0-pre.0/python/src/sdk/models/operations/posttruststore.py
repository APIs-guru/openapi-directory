from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostTruststoreQueryParams:
    operation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': ':operation', 'style': 'form', 'explode': True }})
    key_store_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'keyStoreType', 'style': 'form', 'explode': True }})
    new_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'newPassword', 'style': 'form', 'explode': True }})
    re_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rePassword', 'style': 'form', 'explode': True }})
    remove_alias: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'removeAlias', 'style': 'form', 'explode': True }})
    

@dataclass
class PostTruststoreRequestBodyCertificate:
    certificate: str = field(default=None, metadata={'multipart_form': { 'field_name': 'certificate' }})
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    

@dataclass
class PostTruststoreRequestBody:
    certificate: Optional[PostTruststoreRequestBodyCertificate] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PostTruststoreRequest:
    query_params: PostTruststoreQueryParams = field(default=None)
    request: Optional[PostTruststoreRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostTruststoreResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_truststore_default_text_plain_string: Optional[str] = field(default=None)
    
