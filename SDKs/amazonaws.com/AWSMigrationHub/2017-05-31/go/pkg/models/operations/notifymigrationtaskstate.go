package operations

import (
	"openapi/pkg/models/shared"
)

type NotifyMigrationTaskStateXAmzTargetEnum string

const (
	NotifyMigrationTaskStateXAmzTargetEnumAwsMigrationHubNotifyMigrationTaskState NotifyMigrationTaskStateXAmzTargetEnum = "AWSMigrationHub.NotifyMigrationTaskState"
)

type NotifyMigrationTaskStateHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        NotifyMigrationTaskStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type NotifyMigrationTaskStateRequest struct {
	Headers NotifyMigrationTaskStateHeaders
	Request shared.NotifyMigrationTaskStateRequest `request:"mediaType=application/json"`
}

type NotifyMigrationTaskStateResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	DryRunOperation                *interface{}
	HomeRegionNotSetException      *interface{}
	InternalServerError            *interface{}
	InvalidInputException          *interface{}
	NotifyMigrationTaskStateResult map[string]interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UnauthorizedOperation          *interface{}
}
