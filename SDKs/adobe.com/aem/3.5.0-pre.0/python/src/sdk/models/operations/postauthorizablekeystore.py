from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostAuthorizableKeystorePathParams:
    authorizable_id: str = field(metadata={'path_param': { 'field_name': 'authorizableId', 'style': 'simple', 'explode': False }})
    intermediate_path: str = field(metadata={'path_param': { 'field_name': 'intermediatePath', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAuthorizableKeystoreQueryParams:
    operation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': ':operation', 'style': 'form', 'explode': True }})
    alias: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'alias', 'style': 'form', 'explode': True }})
    current_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currentPassword', 'style': 'form', 'explode': True }})
    key_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'keyPassword', 'style': 'form', 'explode': True }})
    key_store_pass: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'keyStorePass', 'style': 'form', 'explode': True }})
    new_alias: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'newAlias', 'style': 'form', 'explode': True }})
    new_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'newPassword', 'style': 'form', 'explode': True }})
    re_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rePassword', 'style': 'form', 'explode': True }})
    remove_alias: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'removeAlias', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAuthorizableKeystoreRequestBodyCertChain:
    cert_chain: str = field(metadata={'multipart_form': { 'field_name': 'cert-chain' }})
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    

@dataclass
class PostAuthorizableKeystoreRequestBodyKeyStore:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    key_store: str = field(metadata={'multipart_form': { 'field_name': 'keyStore' }})
    

@dataclass
class PostAuthorizableKeystoreRequestBodyPk:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    pk: str = field(metadata={'multipart_form': { 'field_name': 'pk' }})
    

@dataclass
class PostAuthorizableKeystoreRequestBody:
    cert_chain: Optional[PostAuthorizableKeystoreRequestBodyCertChain] = field(default=None, metadata={'multipart_form': { 'file': True }})
    key_store: Optional[PostAuthorizableKeystoreRequestBodyKeyStore] = field(default=None, metadata={'multipart_form': { 'file': True }})
    pk: Optional[PostAuthorizableKeystoreRequestBodyPk] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PostAuthorizableKeystoreRequest:
    path_params: PostAuthorizableKeystorePathParams = field()
    query_params: PostAuthorizableKeystoreQueryParams = field()
    request: Optional[PostAuthorizableKeystoreRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostAuthorizableKeystoreResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    post_authorizable_keystore_default_text_plain_string: Optional[str] = field(default=None)
    
