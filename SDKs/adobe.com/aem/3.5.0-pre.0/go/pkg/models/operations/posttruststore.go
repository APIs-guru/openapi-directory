package operations

type PostTruststoreQueryParams struct {
	Operation    *string `queryParam:"style=form,explode=true,name=:operation"`
	KeyStoreType *string `queryParam:"style=form,explode=true,name=keyStoreType"`
	NewPassword  *string `queryParam:"style=form,explode=true,name=newPassword"`
	RePassword   *string `queryParam:"style=form,explode=true,name=rePassword"`
	RemoveAlias  *string `queryParam:"style=form,explode=true,name=removeAlias"`
}

type PostTruststoreRequestBodyCertificate struct {
	Certificate string `multipartForm:"name=certificate"`
	Content     []byte `multipartForm:"content"`
}

type PostTruststoreRequestBody struct {
	Certificate *PostTruststoreRequestBodyCertificate `multipartForm:"file"`
}

type PostTruststoreRequest struct {
	QueryParams PostTruststoreQueryParams
	Request     *PostTruststoreRequestBody `request:"mediaType=multipart/form-data"`
}

type PostTruststoreResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
