package operations

type PostDeleteServiceSpecificCredentialActionEnum string

const (
	PostDeleteServiceSpecificCredentialActionEnumDeleteServiceSpecificCredential PostDeleteServiceSpecificCredentialActionEnum = "DeleteServiceSpecificCredential"
)

type PostDeleteServiceSpecificCredentialVersionEnum string

const (
	PostDeleteServiceSpecificCredentialVersionEnumTwoThousandAndTen0508 PostDeleteServiceSpecificCredentialVersionEnum = "2010-05-08"
)

type PostDeleteServiceSpecificCredentialQueryParams struct {
	Action  PostDeleteServiceSpecificCredentialActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteServiceSpecificCredentialVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteServiceSpecificCredentialHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteServiceSpecificCredentialRequest struct {
	QueryParams PostDeleteServiceSpecificCredentialQueryParams
	Headers     PostDeleteServiceSpecificCredentialHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteServiceSpecificCredentialResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
