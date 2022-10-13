package operations

type PostSetDefaultPolicyVersionActionEnum string

const (
	PostSetDefaultPolicyVersionActionEnumSetDefaultPolicyVersion PostSetDefaultPolicyVersionActionEnum = "SetDefaultPolicyVersion"
)

type PostSetDefaultPolicyVersionVersionEnum string

const (
	PostSetDefaultPolicyVersionVersionEnumTwoThousandAndTen0508 PostSetDefaultPolicyVersionVersionEnum = "2010-05-08"
)

type PostSetDefaultPolicyVersionQueryParams struct {
	Action  PostSetDefaultPolicyVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetDefaultPolicyVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetDefaultPolicyVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetDefaultPolicyVersionRequest struct {
	QueryParams PostSetDefaultPolicyVersionQueryParams
	Headers     PostSetDefaultPolicyVersionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetDefaultPolicyVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
