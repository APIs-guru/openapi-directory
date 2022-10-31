package operations

import (
	"openapi/pkg/models/shared"
)

type PutOrganizationConformancePackXAmzTargetEnum string

const (
	PutOrganizationConformancePackXAmzTargetEnumStarlingDoveServicePutOrganizationConformancePack PutOrganizationConformancePackXAmzTargetEnum = "StarlingDoveService.PutOrganizationConformancePack"
)

type PutOrganizationConformancePackHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutOrganizationConformancePackXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutOrganizationConformancePackRequest struct {
	Headers PutOrganizationConformancePackHeaders
	Request shared.PutOrganizationConformancePackRequest `request:"mediaType=application/json"`
}

type PutOrganizationConformancePackResponse struct {
	ContentType                                              string
	InsufficientPermissionsException                         *interface{}
	MaxNumberOfOrganizationConformancePacksExceededException *interface{}
	NoAvailableOrganizationException                         *interface{}
	OrganizationAccessDeniedException                        *interface{}
	OrganizationAllFeaturesNotEnabledException               *interface{}
	OrganizationConformancePackTemplateValidationException   *interface{}
	PutOrganizationConformancePackResponse                   *shared.PutOrganizationConformancePackResponse
	ResourceInUseException                                   *interface{}
	StatusCode                                               int64
	ValidationException                                      *interface{}
}
