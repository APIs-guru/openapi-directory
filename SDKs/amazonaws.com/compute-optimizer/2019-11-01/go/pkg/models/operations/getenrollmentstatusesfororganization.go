package operations

import (
	"openapi/pkg/models/shared"
)

type GetEnrollmentStatusesForOrganizationXAmzTargetEnum string

const (
	GetEnrollmentStatusesForOrganizationXAmzTargetEnumComputeOptimizerServiceGetEnrollmentStatusesForOrganization GetEnrollmentStatusesForOrganizationXAmzTargetEnum = "ComputeOptimizerService.GetEnrollmentStatusesForOrganization"
)

type GetEnrollmentStatusesForOrganizationHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEnrollmentStatusesForOrganizationXAmzTargetEnum `header:"name=X-Amz-Target"`
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
