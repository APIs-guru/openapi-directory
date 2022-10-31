package operations

import (
	"openapi/pkg/models/shared"
)

type GetEnrollmentStatusXAmzTargetEnum string

const (
	GetEnrollmentStatusXAmzTargetEnumComputeOptimizerServiceGetEnrollmentStatus GetEnrollmentStatusXAmzTargetEnum = "ComputeOptimizerService.GetEnrollmentStatus"
)

type GetEnrollmentStatusHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEnrollmentStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetEnrollmentStatusRequest struct {
	Headers GetEnrollmentStatusHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetEnrollmentStatusResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	GetEnrollmentStatusResponse    *shared.GetEnrollmentStatusResponse
	InternalServerException        *interface{}
	InvalidParameterValueException *interface{}
	MissingAuthenticationToken     *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
