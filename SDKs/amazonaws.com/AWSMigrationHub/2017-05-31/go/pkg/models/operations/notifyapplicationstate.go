package operations

import (
	"openapi/pkg/models/shared"
)

type NotifyApplicationStateXAmzTargetEnum string

const (
	NotifyApplicationStateXAmzTargetEnumAwsMigrationHubNotifyApplicationState NotifyApplicationStateXAmzTargetEnum = "AWSMigrationHub.NotifyApplicationState"
)

type NotifyApplicationStateHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        NotifyApplicationStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type NotifyApplicationStateRequest struct {
	Headers NotifyApplicationStateHeaders
	Request shared.NotifyApplicationStateRequest `request:"mediaType=application/json"`
}

type NotifyApplicationStateResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	DryRunOperation              *interface{}
	HomeRegionNotSetException    *interface{}
	InternalServerError          *interface{}
	InvalidInputException        *interface{}
	NotifyApplicationStateResult map[string]interface{}
	PolicyErrorException         *interface{}
	ResourceNotFoundException    *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	UnauthorizedOperation        *interface{}
}
