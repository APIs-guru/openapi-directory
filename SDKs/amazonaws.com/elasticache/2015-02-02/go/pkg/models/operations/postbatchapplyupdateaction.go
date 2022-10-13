package operations

type PostBatchApplyUpdateActionActionEnum string

const (
	PostBatchApplyUpdateActionActionEnumBatchApplyUpdateAction PostBatchApplyUpdateActionActionEnum = "BatchApplyUpdateAction"
)

type PostBatchApplyUpdateActionVersionEnum string

const (
	PostBatchApplyUpdateActionVersionEnumTwoThousandAndFifteen0202 PostBatchApplyUpdateActionVersionEnum = "2015-02-02"
)

type PostBatchApplyUpdateActionQueryParams struct {
	Action  PostBatchApplyUpdateActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostBatchApplyUpdateActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostBatchApplyUpdateActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostBatchApplyUpdateActionRequest struct {
	QueryParams PostBatchApplyUpdateActionQueryParams
	Headers     PostBatchApplyUpdateActionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostBatchApplyUpdateActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
