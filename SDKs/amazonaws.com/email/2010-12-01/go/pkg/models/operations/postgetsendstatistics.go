package operations

type PostGetSendStatisticsActionEnum string

const (
	PostGetSendStatisticsActionEnumGetSendStatistics PostGetSendStatisticsActionEnum = "GetSendStatistics"
)

type PostGetSendStatisticsVersionEnum string

const (
	PostGetSendStatisticsVersionEnumTwoThousandAndTen1201 PostGetSendStatisticsVersionEnum = "2010-12-01"
)

type PostGetSendStatisticsQueryParams struct {
	Action  PostGetSendStatisticsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetSendStatisticsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetSendStatisticsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetSendStatisticsRequest struct {
	QueryParams PostGetSendStatisticsQueryParams
	Headers     PostGetSendStatisticsHeaders
}

type PostGetSendStatisticsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
