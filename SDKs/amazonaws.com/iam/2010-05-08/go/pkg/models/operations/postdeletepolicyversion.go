package operations

type PostDeletePolicyVersionActionEnum string

const (
	PostDeletePolicyVersionActionEnumDeletePolicyVersion PostDeletePolicyVersionActionEnum = "DeletePolicyVersion"
)

type PostDeletePolicyVersionVersionEnum string

const (
	PostDeletePolicyVersionVersionEnumTwoThousandAndTen0508 PostDeletePolicyVersionVersionEnum = "2010-05-08"
)

type PostDeletePolicyVersionQueryParams struct {
	Action  PostDeletePolicyVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeletePolicyVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeletePolicyVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeletePolicyVersionRequest struct {
	QueryParams PostDeletePolicyVersionQueryParams
	Headers     PostDeletePolicyVersionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeletePolicyVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
