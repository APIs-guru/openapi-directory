package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRemediationExceptionsXAmzTargetEnum string

const (
	DeleteRemediationExceptionsXAmzTargetEnumStarlingDoveServiceDeleteRemediationExceptions DeleteRemediationExceptionsXAmzTargetEnum = "StarlingDoveService.DeleteRemediationExceptions"
)

type DeleteRemediationExceptionsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRemediationExceptionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRemediationExceptionsRequest struct {
	Headers DeleteRemediationExceptionsHeaders
	Request shared.DeleteRemediationExceptionsRequest `request:"mediaType=application/json"`
}

type DeleteRemediationExceptionsResponse struct {
	ContentType                         string
	DeleteRemediationExceptionsResponse *shared.DeleteRemediationExceptionsResponse
	NoSuchRemediationExceptionException *interface{}
	StatusCode                          int64
}
