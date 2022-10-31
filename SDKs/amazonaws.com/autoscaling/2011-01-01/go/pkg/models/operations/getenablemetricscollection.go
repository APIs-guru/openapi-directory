package operations

type GetEnableMetricsCollectionActionEnum string

const (
	GetEnableMetricsCollectionActionEnumEnableMetricsCollection GetEnableMetricsCollectionActionEnum = "EnableMetricsCollection"
)

type GetEnableMetricsCollectionVersionEnum string

const (
	GetEnableMetricsCollectionVersionEnumTwoThousandAndEleven0101 GetEnableMetricsCollectionVersionEnum = "2011-01-01"
)

type GetEnableMetricsCollectionQueryParams struct {
	Action               GetEnableMetricsCollectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                                `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	Granularity          string                                `queryParam:"style=form,explode=true,name=Granularity"`
	Metrics              []string                              `queryParam:"style=form,explode=true,name=Metrics"`
	Version              GetEnableMetricsCollectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetEnableMetricsCollectionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetEnableMetricsCollectionRequest struct {
	QueryParams GetEnableMetricsCollectionQueryParams
	Headers     GetEnableMetricsCollectionHeaders
}

type GetEnableMetricsCollectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
