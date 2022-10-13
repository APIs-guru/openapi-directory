package operations

type GetCancelSpotFleetRequestsActionEnum string

const (
	GetCancelSpotFleetRequestsActionEnumCancelSpotFleetRequests GetCancelSpotFleetRequestsActionEnum = "CancelSpotFleetRequests"
)

type GetCancelSpotFleetRequestsVersionEnum string

const (
	GetCancelSpotFleetRequestsVersionEnumTwoThousandAndSixteen1115 GetCancelSpotFleetRequestsVersionEnum = "2016-11-15"
)

type GetCancelSpotFleetRequestsQueryParams struct {
	Action             GetCancelSpotFleetRequestsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun             *bool                                 `queryParam:"style=form,explode=true,name=DryRun"`
	SpotFleetRequestID []string                              `queryParam:"style=form,explode=true,name=SpotFleetRequestId"`
	TerminateInstances bool                                  `queryParam:"style=form,explode=true,name=TerminateInstances"`
	Version            GetCancelSpotFleetRequestsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCancelSpotFleetRequestsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCancelSpotFleetRequestsRequest struct {
	QueryParams GetCancelSpotFleetRequestsQueryParams
	Headers     GetCancelSpotFleetRequestsHeaders
}

type GetCancelSpotFleetRequestsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
