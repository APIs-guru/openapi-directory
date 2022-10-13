package operations

type DeleteCaCertificatePathParams struct {
	CaCertificateID string `pathParam:"style=simple,explode=false,name=caCertificateId"`
}

type DeleteCaCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteCaCertificateRequest struct {
	PathParams DeleteCaCertificatePathParams
	Headers    DeleteCaCertificateHeaders
}

type DeleteCaCertificateResponse struct {
	CertificateStateException   *interface{}
	ContentType                 string
	DeleteCaCertificateResponse map[string]interface{}
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
