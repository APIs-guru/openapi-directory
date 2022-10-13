package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteConformancePackXAmzTargetEnum string

const (
	DeleteConformancePackXAmzTargetEnumStarlingDoveServiceDeleteConformancePack DeleteConformancePackXAmzTargetEnum = "StarlingDoveService.DeleteConformancePack"
)

type DeleteConformancePackHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteConformancePackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteConformancePackRequest struct {
	Headers DeleteConformancePackHeaders
	Request shared.DeleteConformancePackRequest `request:"mediaType=application/json"`
}

type DeleteConformancePackResponse struct {
	ContentType                    string
	NoSuchConformancePackException *interface{}
	ResourceInUseException         *interface{}
	StatusCode                     int64
}
