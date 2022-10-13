package operations

type PostBatchPutScheduledUpdateGroupActionActionEnum string

const (
	PostBatchPutScheduledUpdateGroupActionActionEnumBatchPutScheduledUpdateGroupAction PostBatchPutScheduledUpdateGroupActionActionEnum = "BatchPutScheduledUpdateGroupAction"
)

type PostBatchPutScheduledUpdateGroupActionVersionEnum string

const (
	PostBatchPutScheduledUpdateGroupActionVersionEnumTwoThousandAndEleven0101 PostBatchPutScheduledUpdateGroupActionVersionEnum = "2011-01-01"
)

type PostBatchPutScheduledUpdateGroupActionQueryParams struct {
	Action  PostBatchPutScheduledUpdateGroupActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostBatchPutScheduledUpdateGroupActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostBatchPutScheduledUpdateGroupActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostBatchPutScheduledUpdateGroupActionRequest struct {
	QueryParams PostBatchPutScheduledUpdateGroupActionQueryParams
	Headers     PostBatchPutScheduledUpdateGroupActionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostBatchPutScheduledUpdateGroupActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
