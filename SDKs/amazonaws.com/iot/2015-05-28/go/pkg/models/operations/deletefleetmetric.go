package operations

type DeleteFleetMetricPathParams struct {
	MetricName string `pathParam:"style=simple,explode=false,name=metricName"`
}

type DeleteFleetMetricQueryParams struct {
	ExpectedVersion *int64 `queryParam:"style=form,explode=true,name=expectedVersion"`
}

type DeleteFleetMetricHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteFleetMetricRequest struct {
	PathParams  DeleteFleetMetricPathParams
	QueryParams DeleteFleetMetricQueryParams
	Headers     DeleteFleetMetricHeaders
}

type DeleteFleetMetricResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
	VersionConflictException    *interface{}
}
