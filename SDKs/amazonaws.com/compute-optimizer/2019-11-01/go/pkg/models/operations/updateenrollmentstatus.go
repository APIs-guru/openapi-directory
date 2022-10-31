package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEnrollmentStatusXAmzTargetEnum string

const (
	UpdateEnrollmentStatusXAmzTargetEnumComputeOptimizerServiceUpdateEnrollmentStatus UpdateEnrollmentStatusXAmzTargetEnum = "ComputeOptimizerService.UpdateEnrollmentStatus"
)

type UpdateEnrollmentStatusHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEnrollmentStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateEnrollmentStatusRequest struct {
	Headers UpdateEnrollmentStatusHeaders
	Request shared.UpdateEnrollmentStatusRequest `request:"mediaType=application/json"`
}

type UpdateEnrollmentStatusResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	InvalidParameterValueException *interface{}
	MissingAuthenticationToken     *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UpdateEnrollmentStatusResponse *shared.UpdateEnrollmentStatusResponse
}
