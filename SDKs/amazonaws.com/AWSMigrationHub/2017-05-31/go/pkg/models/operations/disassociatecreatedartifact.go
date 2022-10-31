package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateCreatedArtifactXAmzTargetEnum string

const (
	DisassociateCreatedArtifactXAmzTargetEnumAwsMigrationHubDisassociateCreatedArtifact DisassociateCreatedArtifactXAmzTargetEnum = "AWSMigrationHub.DisassociateCreatedArtifact"
)

type DisassociateCreatedArtifactHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateCreatedArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisassociateCreatedArtifactRequest struct {
	Headers DisassociateCreatedArtifactHeaders
	Request shared.DisassociateCreatedArtifactRequest `request:"mediaType=application/json"`
}

type DisassociateCreatedArtifactResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	DisassociateCreatedArtifactResult map[string]interface{}
	DryRunOperation                   *interface{}
	HomeRegionNotSetException         *interface{}
	InternalServerError               *interface{}
	InvalidInputException             *interface{}
	ResourceNotFoundException         *interface{}
	ServiceUnavailableException       *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	UnauthorizedOperation             *interface{}
}
