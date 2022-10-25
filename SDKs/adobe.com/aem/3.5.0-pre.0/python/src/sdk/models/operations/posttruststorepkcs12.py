from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostTruststorePkcs12RequestBodyTruststoreP12:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    truststore_p12: str = field(default=None, metadata={'multipart_form': { 'field_name': 'truststore.p12' }})
    

@dataclass
class PostTruststorePkcs12RequestBody:
    truststore_p12: Optional[PostTruststorePkcs12RequestBodyTruststoreP12] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PostTruststorePkcs12Request:
    request: Optional[PostTruststorePkcs12RequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostTruststorePkcs12Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_truststore_pkcs12_default_text_plain_string: Optional[str] = field(default=None)
    
