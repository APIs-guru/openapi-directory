package operations



type PostConfigApacheFelixJettyBasedHTTPServiceQueryParams struct {
    OrgApacheFelixHTTPSClientcertificate *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.clientcertificate"`
    OrgApacheFelixHTTPSClientcertificateAtTypeHint *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.clientcertificate@TypeHint"`
    OrgApacheFelixHTTPSEnable *bool `queryParam:"style=form,explode=true,name=org.apache.felix.https.enable"`
    OrgApacheFelixHTTPSEnableAtTypeHint *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.enable@TypeHint"`
    OrgApacheFelixHTTPSKeystore *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.keystore"`
    OrgApacheFelixHTTPSKeystoreKey *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.keystore.key"`
    OrgApacheFelixHTTPSKeystoreKeyPassword *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.keystore.key.password"`
    OrgApacheFelixHTTPSKeystoreKeyPasswordAtTypeHint *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.keystore.key.password@TypeHint"`
    OrgApacheFelixHTTPSKeystoreKeyAtTypeHint *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.keystore.key@TypeHint"`
    OrgApacheFelixHTTPSKeystorePassword *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.keystore.password"`
    OrgApacheFelixHTTPSKeystorePasswordAtTypeHint *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.keystore.password@TypeHint"`
    OrgApacheFelixHTTPSKeystoreAtTypeHint *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.keystore@TypeHint"`
    OrgApacheFelixHTTPSNio *bool `queryParam:"style=form,explode=true,name=org.apache.felix.https.nio"`
    OrgApacheFelixHTTPSNioAtTypeHint *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.nio@TypeHint"`
    OrgApacheFelixHTTPSTruststore *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.truststore"`
    OrgApacheFelixHTTPSTruststorePassword *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.truststore.password"`
    OrgApacheFelixHTTPSTruststorePasswordAtTypeHint *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.truststore.password@TypeHint"`
    OrgApacheFelixHTTPSTruststoreAtTypeHint *string `queryParam:"style=form,explode=true,name=org.apache.felix.https.truststore@TypeHint"`
    OrgOsgiServiceHTTPPortSecure *string `queryParam:"style=form,explode=true,name=org.osgi.service.http.port.secure"`
    OrgOsgiServiceHTTPPortSecureAtTypeHint *string `queryParam:"style=form,explode=true,name=org.osgi.service.http.port.secure@TypeHint"`
    
}

type PostConfigApacheFelixJettyBasedHTTPServiceRequest struct {
    QueryParams PostConfigApacheFelixJettyBasedHTTPServiceQueryParams 
    
}

type PostConfigApacheFelixJettyBasedHTTPServiceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

