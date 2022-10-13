package operations

type PostExecutePolicyActionEnum string

const (
	PostExecutePolicyActionEnumExecutePolicy PostExecutePolicyActionEnum = "ExecutePolicy"
)

type PostExecutePolicyVersionEnum string

const (
	PostExecutePolicyVersionEnumTwoThousandAndEleven0101 PostExecutePolicyVersionEnum = "2011-01-01"
)

type PostExecutePolicyQueryParams struct {
	Action  PostExecutePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostExecutePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostExecutePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostExecutePolicyRequest struct {
	QueryParams PostExecutePolicyQueryParams
	Headers     PostExecutePolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostExecutePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
