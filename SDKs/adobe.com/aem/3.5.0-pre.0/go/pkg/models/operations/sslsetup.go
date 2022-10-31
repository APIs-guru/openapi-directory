package operations

type SslSetupQueryParams struct {
	HTTPSHostname             string `queryParam:"style=form,explode=true,name=httpsHostname"`
	HTTPSPort                 string `queryParam:"style=form,explode=true,name=httpsPort"`
	KeystorePassword          string `queryParam:"style=form,explode=true,name=keystorePassword"`
	KeystorePasswordConfirm   string `queryParam:"style=form,explode=true,name=keystorePasswordConfirm"`
	TruststorePassword        string `queryParam:"style=form,explode=true,name=truststorePassword"`
	TruststorePasswordConfirm string `queryParam:"style=form,explode=true,name=truststorePasswordConfirm"`
}

type SslSetupRequestBodyCertificateFile struct {
	CertificateFile string `multipartForm:"name=certificateFile"`
	Content         []byte `multipartForm:"content"`
}

type SslSetupRequestBodyPrivatekeyFile struct {
	Content        []byte `multipartForm:"content"`
	PrivatekeyFile string `multipartForm:"name=privatekeyFile"`
}

type SslSetupRequestBody struct {
	CertificateFile *SslSetupRequestBodyCertificateFile `multipartForm:"file"`
	PrivatekeyFile  *SslSetupRequestBodyPrivatekeyFile  `multipartForm:"file"`
}

type SslSetupRequest struct {
	QueryParams SslSetupQueryParams
	Request     *SslSetupRequestBody `request:"mediaType=multipart/form-data"`
}

type SslSetupResponse struct {
	ContentType                    string
	StatusCode                     int64
	SslSetupDefaultTextPlainString *string
}
