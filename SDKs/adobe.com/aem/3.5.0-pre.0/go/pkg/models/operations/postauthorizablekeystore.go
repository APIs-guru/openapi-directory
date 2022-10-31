package operations

type PostAuthorizableKeystorePathParams struct {
	AuthorizableID   string `pathParam:"style=simple,explode=false,name=authorizableId"`
	IntermediatePath string `pathParam:"style=simple,explode=false,name=intermediatePath"`
}

type PostAuthorizableKeystoreQueryParams struct {
	Operation       *string `queryParam:"style=form,explode=true,name=:operation"`
	Alias           *string `queryParam:"style=form,explode=true,name=alias"`
	CurrentPassword *string `queryParam:"style=form,explode=true,name=currentPassword"`
	KeyPassword     *string `queryParam:"style=form,explode=true,name=keyPassword"`
	KeyStorePass    *string `queryParam:"style=form,explode=true,name=keyStorePass"`
	NewAlias        *string `queryParam:"style=form,explode=true,name=newAlias"`
	NewPassword     *string `queryParam:"style=form,explode=true,name=newPassword"`
	RePassword      *string `queryParam:"style=form,explode=true,name=rePassword"`
	RemoveAlias     *string `queryParam:"style=form,explode=true,name=removeAlias"`
}

type PostAuthorizableKeystoreRequestBodyCertChain struct {
	CertChain string `multipartForm:"name=cert-chain"`
	Content   []byte `multipartForm:"content"`
}

type PostAuthorizableKeystoreRequestBodyKeyStore struct {
	Content  []byte `multipartForm:"content"`
	KeyStore string `multipartForm:"name=keyStore"`
}

type PostAuthorizableKeystoreRequestBodyPk struct {
	Content []byte `multipartForm:"content"`
	Pk      string `multipartForm:"name=pk"`
}

type PostAuthorizableKeystoreRequestBody struct {
	CertChain *PostAuthorizableKeystoreRequestBodyCertChain `multipartForm:"file"`
	KeyStore  *PostAuthorizableKeystoreRequestBodyKeyStore  `multipartForm:"file"`
	Pk        *PostAuthorizableKeystoreRequestBodyPk        `multipartForm:"file"`
}

type PostAuthorizableKeystoreRequest struct {
	PathParams  PostAuthorizableKeystorePathParams
	QueryParams PostAuthorizableKeystoreQueryParams
	Request     *PostAuthorizableKeystoreRequestBody `request:"mediaType=multipart/form-data"`
}

type PostAuthorizableKeystoreResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	PostAuthorizableKeystoreDefaultTextPlainString *string
}
