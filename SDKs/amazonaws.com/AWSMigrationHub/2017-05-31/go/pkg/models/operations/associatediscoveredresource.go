package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateDiscoveredResourceXAmzTargetEnum string

const (
	AssociateDiscoveredResourceXAmzTargetEnumAwsMigrationHubAssociateDiscoveredResource AssociateDiscoveredResourceXAmzTargetEnum = "AWSMigrationHub.AssociateDiscoveredResource"
)

type AssociateDiscoveredResourceHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateDiscoveredResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateDiscoveredResourceRequest struct {
	Headers AssociateDiscoveredResourceHeaders
	Request shared.AssociateDiscoveredResourceRequest `request:"mediaType=application/json"`
}

type AssociateDiscoveredResourceResponse struct {
	AccessDeniedException             *interface{}
	AssociateDiscoveredResourceResult map[string]interface{}
	ContentType                       string
	DryRunOperation                   *interface{}
	HomeRegionNotSetException         *interface{}
	InternalServerError               *interface{}
	InvalidInputException             *interface{}
	PolicyErrorException              *interface{}
	ResourceNotFoundException         *interface{}
	ServiceUnavailableException       *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	UnauthorizedOperation             *interface{}
}
