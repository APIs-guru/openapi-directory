package operations

import (
	"openapi/pkg/models/shared"
)

type CancelStepsXAmzTargetEnum string

const (
	CancelStepsXAmzTargetEnumElasticMapReduceCancelSteps CancelStepsXAmzTargetEnum = "ElasticMapReduce.CancelSteps"
)

type CancelStepsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelStepsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelStepsRequest struct {
	Headers CancelStepsHeaders
	Request shared.CancelStepsInput `request:"mediaType=application/json"`
}

type CancelStepsResponse struct {
	CancelStepsOutput       *shared.CancelStepsOutput
	ContentType             string
	InternalServerError     *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
