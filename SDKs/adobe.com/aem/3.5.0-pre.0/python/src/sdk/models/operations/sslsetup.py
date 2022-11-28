from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SslSetupQueryParams:
    https_hostname: str = field(metadata={'query_param': { 'field_name': 'httpsHostname', 'style': 'form', 'explode': True }})
    https_port: str = field(metadata={'query_param': { 'field_name': 'httpsPort', 'style': 'form', 'explode': True }})
    keystore_password: str = field(metadata={'query_param': { 'field_name': 'keystorePassword', 'style': 'form', 'explode': True }})
    keystore_password_confirm: str = field(metadata={'query_param': { 'field_name': 'keystorePasswordConfirm', 'style': 'form', 'explode': True }})
    truststore_password: str = field(metadata={'query_param': { 'field_name': 'truststorePassword', 'style': 'form', 'explode': True }})
    truststore_password_confirm: str = field(metadata={'query_param': { 'field_name': 'truststorePasswordConfirm', 'style': 'form', 'explode': True }})
    

@dataclass
class SslSetupRequestBodyCertificateFile:
    certificate_file: str = field(metadata={'multipart_form': { 'field_name': 'certificateFile' }})
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    

@dataclass
class SslSetupRequestBodyPrivatekeyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    privatekey_file: str = field(metadata={'multipart_form': { 'field_name': 'privatekeyFile' }})
    

@dataclass
class SslSetupRequestBody:
    certificate_file: Optional[SslSetupRequestBodyCertificateFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    privatekey_file: Optional[SslSetupRequestBodyPrivatekeyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class SslSetupRequest:
    query_params: SslSetupQueryParams = field()
    request: Optional[SslSetupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SslSetupResponse:
    content_type: str = field()
    status_code: int = field()
    ssl_setup_default_text_plain_string: Optional[str] = field(default=None)
    
