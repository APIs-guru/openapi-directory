package operations

type PostResetServiceSpecificCredentialActionEnum string

const (
	PostResetServiceSpecificCredentialActionEnumResetServiceSpecificCredential PostResetServiceSpecificCredentialActionEnum = "ResetServiceSpecificCredential"
)

type PostResetServiceSpecificCredentialVersionEnum string

const (
	PostResetServiceSpecificCredentialVersionEnumTwoThousandAndTen0508 PostResetServiceSpecificCredentialVersionEnum = "2010-05-08"
)

type PostResetServiceSpecificCredentialQueryParams struct {
	Action  PostResetServiceSpecificCredentialActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetServiceSpecificCredentialVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetServiceSpecificCredentialHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostResetServiceSpecificCredentialRequest struct {
	QueryParams PostResetServiceSpecificCredentialQueryParams
	Headers     PostResetServiceSpecificCredentialHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetServiceSpecificCredentialResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
