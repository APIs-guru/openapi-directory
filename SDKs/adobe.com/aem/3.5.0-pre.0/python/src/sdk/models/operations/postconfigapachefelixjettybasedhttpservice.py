from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostConfigApacheFelixJettyBasedHTTPServiceQueryParams:
    org_apache_felix_https_clientcertificate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.clientcertificate', 'style': 'form', 'explode': True }})
    org_apache_felix_https_clientcertificate_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.clientcertificate@TypeHint', 'style': 'form', 'explode': True }})
    org_apache_felix_https_enable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.enable', 'style': 'form', 'explode': True }})
    org_apache_felix_https_enable_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.enable@TypeHint', 'style': 'form', 'explode': True }})
    org_apache_felix_https_keystore: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.keystore', 'style': 'form', 'explode': True }})
    org_apache_felix_https_keystore_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.keystore.key', 'style': 'form', 'explode': True }})
    org_apache_felix_https_keystore_key_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.keystore.key.password', 'style': 'form', 'explode': True }})
    org_apache_felix_https_keystore_key_password_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.keystore.key.password@TypeHint', 'style': 'form', 'explode': True }})
    org_apache_felix_https_keystore_key_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.keystore.key@TypeHint', 'style': 'form', 'explode': True }})
    org_apache_felix_https_keystore_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.keystore.password', 'style': 'form', 'explode': True }})
    org_apache_felix_https_keystore_password_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.keystore.password@TypeHint', 'style': 'form', 'explode': True }})
    org_apache_felix_https_keystore_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.keystore@TypeHint', 'style': 'form', 'explode': True }})
    org_apache_felix_https_nio: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.nio', 'style': 'form', 'explode': True }})
    org_apache_felix_https_nio_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.nio@TypeHint', 'style': 'form', 'explode': True }})
    org_apache_felix_https_truststore: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.truststore', 'style': 'form', 'explode': True }})
    org_apache_felix_https_truststore_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.truststore.password', 'style': 'form', 'explode': True }})
    org_apache_felix_https_truststore_password_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.truststore.password@TypeHint', 'style': 'form', 'explode': True }})
    org_apache_felix_https_truststore_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.apache.felix.https.truststore@TypeHint', 'style': 'form', 'explode': True }})
    org_osgi_service_http_port_secure: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.osgi.service.http.port.secure', 'style': 'form', 'explode': True }})
    org_osgi_service_http_port_secure_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org.osgi.service.http.port.secure@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclass
class PostConfigApacheFelixJettyBasedHTTPServiceRequest:
    query_params: PostConfigApacheFelixJettyBasedHTTPServiceQueryParams = field(default=None)
    

@dataclass
class PostConfigApacheFelixJettyBasedHTTPServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
