package operations

import (
	"openapi/pkg/models/shared"
)

type GetEnrollmentStatusesForOrganizationXAmzTargetEnum string

const (
	GetEnrollmentStatusesForOrganizationXAmzTargetEnumComputeOptimizerServiceGetEnrollmentStatusesForOrganization GetEnrollmentStatusesForOrganizationXAmzTargetEnum = "ComputeOptimizerService.GetEnrollmentStatusesForOrganization"
)

type GetEnrollmentStatusesForOrganizationHeaders struct {
	XAmzAlgorithm     *string                                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEnrollmentStatusesForOrganizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetEnrollmentStatusesForOrganizationRequest struct {
	Headers GetEnrollmentStatusesForOrganizationHeaders
	Request shared.GetEnrollmentStatusesForOrganizationRequest `request:"mediaType=application/json"`
}

type GetEnrollmentStatusesForOrganizationResponse struct {
	AccessDeniedException                        *interface{}
	ContentType                                  string
	GetEnrollmentStatusesForOrganizationResponse *shared.GetEnrollmentStatusesForOrganizationResponse
	InternalServerException                      *interface{}
	InvalidParameterValueException               *interface{}
	MissingAuthenticationToken                   *interface{}
	ServiceUnavailableException                  *interface{}
	StatusCode                                   int64
	ThrottlingException                          *interface{}
}
