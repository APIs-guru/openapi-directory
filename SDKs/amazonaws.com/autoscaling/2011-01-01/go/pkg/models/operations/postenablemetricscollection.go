package operations

type PostEnableMetricsCollectionActionEnum string

const (
	PostEnableMetricsCollectionActionEnumEnableMetricsCollection PostEnableMetricsCollectionActionEnum = "EnableMetricsCollection"
)

type PostEnableMetricsCollectionVersionEnum string

const (
	PostEnableMetricsCollectionVersionEnumTwoThousandAndEleven0101 PostEnableMetricsCollectionVersionEnum = "2011-01-01"
)

type PostEnableMetricsCollectionQueryParams struct {
	Action  PostEnableMetricsCollectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableMetricsCollectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableMetricsCollectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostEnableMetricsCollectionRequest struct {
	QueryParams PostEnableMetricsCollectionQueryParams
	Headers     PostEnableMetricsCollectionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableMetricsCollectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
