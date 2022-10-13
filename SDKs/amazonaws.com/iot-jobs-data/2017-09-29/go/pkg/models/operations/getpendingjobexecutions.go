package operations

import (
	"openapi/pkg/models/shared"
)

type GetPendingJobExecutionsPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type GetPendingJobExecutionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPendingJobExecutionsRequest struct {
	PathParams GetPendingJobExecutionsPathParams
	Headers    GetPendingJobExecutionsHeaders
}

type GetPendingJobExecutionsResponse struct {
	CertificateValidationException  *interface{}
	ContentType                     string
	GetPendingJobExecutionsResponse *shared.GetPendingJobExecutionsResponse
	InvalidRequestException         *interface{}
	ResourceNotFoundException       *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
}
