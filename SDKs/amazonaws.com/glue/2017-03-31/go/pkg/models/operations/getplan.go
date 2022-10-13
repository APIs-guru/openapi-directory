package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlanXAmzTargetEnum string

const (
	GetPlanXAmzTargetEnumAwsGlueGetPlan GetPlanXAmzTargetEnum = "AWSGlue.GetPlan"
)

type GetPlanHeaders struct {
	XAmzAlgorithm     *string               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"name=X-Amz-Credential"`
	XAmzDate          *string               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPlanXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPlanRequest struct {
	Headers GetPlanHeaders
	Request shared.GetPlanRequest `request:"mediaType=application/json"`
}

type GetPlanResponse struct {
	ContentType               string
	GetPlanResponse           *shared.GetPlanResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
