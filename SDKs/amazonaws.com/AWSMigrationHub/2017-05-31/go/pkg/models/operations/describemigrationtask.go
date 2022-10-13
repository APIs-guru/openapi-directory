package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMigrationTaskXAmzTargetEnum string

const (
	DescribeMigrationTaskXAmzTargetEnumAwsMigrationHubDescribeMigrationTask DescribeMigrationTaskXAmzTargetEnum = "AWSMigrationHub.DescribeMigrationTask"
)

type DescribeMigrationTaskHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMigrationTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeMigrationTaskRequest struct {
	Headers DescribeMigrationTaskHeaders
	Request shared.DescribeMigrationTaskRequest `request:"mediaType=application/json"`
}

type DescribeMigrationTaskResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	DescribeMigrationTaskResult *shared.DescribeMigrationTaskResult
	HomeRegionNotSetException   *interface{}
	InternalServerError         *interface{}
	InvalidInputException       *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
