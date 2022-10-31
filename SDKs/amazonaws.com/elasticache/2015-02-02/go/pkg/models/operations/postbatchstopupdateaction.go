package operations

type PostBatchStopUpdateActionActionEnum string

const (
	PostBatchStopUpdateActionActionEnumBatchStopUpdateAction PostBatchStopUpdateActionActionEnum = "BatchStopUpdateAction"
)

type PostBatchStopUpdateActionVersionEnum string

const (
	PostBatchStopUpdateActionVersionEnumTwoThousandAndFifteen0202 PostBatchStopUpdateActionVersionEnum = "2015-02-02"
)

type PostBatchStopUpdateActionQueryParams struct {
	Action  PostBatchStopUpdateActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostBatchStopUpdateActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostBatchStopUpdateActionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostBatchStopUpdateActionRequest struct {
	QueryParams PostBatchStopUpdateActionQueryParams
	Headers     PostBatchStopUpdateActionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostBatchStopUpdateActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
