package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProgressUpdateStreamXAmzTargetEnum string

const (
	CreateProgressUpdateStreamXAmzTargetEnumAwsMigrationHubCreateProgressUpdateStream CreateProgressUpdateStreamXAmzTargetEnum = "AWSMigrationHub.CreateProgressUpdateStream"
)

type CreateProgressUpdateStreamHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateProgressUpdateStreamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateProgressUpdateStreamRequest struct {
	Headers CreateProgressUpdateStreamHeaders
	Request shared.CreateProgressUpdateStreamRequest `request:"mediaType=application/json"`
}

type CreateProgressUpdateStreamResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	CreateProgressUpdateStreamResult map[string]interface{}
	DryRunOperation                  *interface{}
	HomeRegionNotSetException        *interface{}
	InternalServerError              *interface{}
	InvalidInputException            *interface{}
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	UnauthorizedOperation            *interface{}
}
