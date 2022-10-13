package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateDiscoveredResourceXAmzTargetEnum string

const (
	DisassociateDiscoveredResourceXAmzTargetEnumAwsMigrationHubDisassociateDiscoveredResource DisassociateDiscoveredResourceXAmzTargetEnum = "AWSMigrationHub.DisassociateDiscoveredResource"
)

type DisassociateDiscoveredResourceHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateDiscoveredResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateDiscoveredResourceRequest struct {
	Headers DisassociateDiscoveredResourceHeaders
	Request shared.DisassociateDiscoveredResourceRequest `request:"mediaType=application/json"`
}

type DisassociateDiscoveredResourceResponse struct {
	AccessDeniedException                *interface{}
	ContentType                          string
	DisassociateDiscoveredResourceResult map[string]interface{}
	DryRunOperation                      *interface{}
	HomeRegionNotSetException            *interface{}
	InternalServerError                  *interface{}
	InvalidInputException                *interface{}
	ResourceNotFoundException            *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
	UnauthorizedOperation                *interface{}
}
