from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SslSetupQueryParams:
    https_hostname: str = field(default=None, metadata={'query_param': { 'field_name': 'httpsHostname', 'style': 'form', 'explode': True }})
    https_port: str = field(default=None, metadata={'query_param': { 'field_name': 'httpsPort', 'style': 'form', 'explode': True }})
    keystore_password: str = field(default=None, metadata={'query_param': { 'field_name': 'keystorePassword', 'style': 'form', 'explode': True }})
    keystore_password_confirm: str = field(default=None, metadata={'query_param': { 'field_name': 'keystorePasswordConfirm', 'style': 'form', 'explode': True }})
    truststore_password: str = field(default=None, metadata={'query_param': { 'field_name': 'truststorePassword', 'style': 'form', 'explode': True }})
    truststore_password_confirm: str = field(default=None, metadata={'query_param': { 'field_name': 'truststorePasswordConfirm', 'style': 'form', 'explode': True }})
    

@dataclass
class SslSetupRequestBodyCertificateFile:
    certificate_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'certificateFile' }})
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    

@dataclass
class SslSetupRequestBodyPrivatekeyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    privatekey_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'privatekeyFile' }})
    

@dataclass
class SslSetupRequestBody:
    certificate_file: Optional[SslSetupRequestBodyCertificateFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    privatekey_file: Optional[SslSetupRequestBodyPrivatekeyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class SslSetupRequest:
    query_params: SslSetupQueryParams = field(default=None)
    request: Optional[SslSetupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SslSetupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
