package operations

type GetDisableMetricsCollectionActionEnum string

const (
	GetDisableMetricsCollectionActionEnumDisableMetricsCollection GetDisableMetricsCollectionActionEnum = "DisableMetricsCollection"
)

type GetDisableMetricsCollectionVersionEnum string

const (
	GetDisableMetricsCollectionVersionEnumTwoThousandAndEleven0101 GetDisableMetricsCollectionVersionEnum = "2011-01-01"
)

type GetDisableMetricsCollectionQueryParams struct {
	Action               GetDisableMetricsCollectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                                 `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	Metrics              []string                               `queryParam:"style=form,explode=true,name=Metrics"`
	Version              GetDisableMetricsCollectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisableMetricsCollectionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDisableMetricsCollectionRequest struct {
	QueryParams GetDisableMetricsCollectionQueryParams
	Headers     GetDisableMetricsCollectionHeaders
}

type GetDisableMetricsCollectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
