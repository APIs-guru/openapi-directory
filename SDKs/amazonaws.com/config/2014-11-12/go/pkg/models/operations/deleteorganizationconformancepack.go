package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteOrganizationConformancePackXAmzTargetEnum string

const (
	DeleteOrganizationConformancePackXAmzTargetEnumStarlingDoveServiceDeleteOrganizationConformancePack DeleteOrganizationConformancePackXAmzTargetEnum = "StarlingDoveService.DeleteOrganizationConformancePack"
)

type DeleteOrganizationConformancePackHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteOrganizationConformancePackXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteOrganizationConformancePackRequest struct {
	Headers DeleteOrganizationConformancePackHeaders
	Request shared.DeleteOrganizationConformancePackRequest `request:"mediaType=application/json"`
}

type DeleteOrganizationConformancePackResponse struct {
	ContentType                                string
	NoSuchOrganizationConformancePackException *interface{}
	OrganizationAccessDeniedException          *interface{}
	ResourceInUseException                     *interface{}
	StatusCode                                 int64
}
