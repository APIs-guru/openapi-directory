package operations

type PostCreateServiceSpecificCredentialActionEnum string

const (
	PostCreateServiceSpecificCredentialActionEnumCreateServiceSpecificCredential PostCreateServiceSpecificCredentialActionEnum = "CreateServiceSpecificCredential"
)

type PostCreateServiceSpecificCredentialVersionEnum string

const (
	PostCreateServiceSpecificCredentialVersionEnumTwoThousandAndTen0508 PostCreateServiceSpecificCredentialVersionEnum = "2010-05-08"
)

type PostCreateServiceSpecificCredentialQueryParams struct {
	Action  PostCreateServiceSpecificCredentialActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateServiceSpecificCredentialVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateServiceSpecificCredentialHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateServiceSpecificCredentialRequest struct {
	QueryParams PostCreateServiceSpecificCredentialQueryParams
	Headers     PostCreateServiceSpecificCredentialHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateServiceSpecificCredentialResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
