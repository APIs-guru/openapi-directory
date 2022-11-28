package operations

type GetConfigureHealthCheckActionEnum string

const (
	GetConfigureHealthCheckActionEnumConfigureHealthCheck GetConfigureHealthCheckActionEnum = "ConfigureHealthCheck"
)

// GetConfigureHealthCheckHealthCheck
// Information about a health check.
type GetConfigureHealthCheckHealthCheck struct {
	HealthyThreshold   int64  `queryParam:"name=HealthyThreshold"`
	Interval           int64  `queryParam:"name=Interval"`
	Target             string `queryParam:"name=Target"`
	Timeout            int64  `queryParam:"name=Timeout"`
	UnhealthyThreshold int64  `queryParam:"name=UnhealthyThreshold"`
}

type GetConfigureHealthCheckVersionEnum string

const (
	GetConfigureHealthCheckVersionEnumTwoThousandAndTwelve0601 GetConfigureHealthCheckVersionEnum = "2012-06-01"
)

type GetConfigureHealthCheckQueryParams struct {
	Action           GetConfigureHealthCheckActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	HealthCheck      GetConfigureHealthCheckHealthCheck `queryParam:"style=form,explode=true,name=HealthCheck"`
	LoadBalancerName string                             `queryParam:"style=form,explode=true,name=LoadBalancerName"`
	Version          GetConfigureHealthCheckVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetConfigureHealthCheckHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetConfigureHealthCheckRequest struct {
	QueryParams GetConfigureHealthCheckQueryParams
	Headers     GetConfigureHealthCheckHeaders
}

type GetConfigureHealthCheckResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
