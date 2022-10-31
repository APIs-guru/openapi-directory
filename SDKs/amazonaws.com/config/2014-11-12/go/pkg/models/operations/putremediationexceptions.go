package operations

import (
	"openapi/pkg/models/shared"
)

type PutRemediationExceptionsXAmzTargetEnum string

const (
	PutRemediationExceptionsXAmzTargetEnumStarlingDoveServicePutRemediationExceptions PutRemediationExceptionsXAmzTargetEnum = "StarlingDoveService.PutRemediationExceptions"
)

type PutRemediationExceptionsHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRemediationExceptionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutRemediationExceptionsRequest struct {
	Headers PutRemediationExceptionsHeaders
	Request shared.PutRemediationExceptionsRequest `request:"mediaType=application/json"`
}

type PutRemediationExceptionsResponse struct {
	ContentType                      string
	InsufficientPermissionsException *interface{}
	InvalidParameterValueException   *interface{}
	PutRemediationExceptionsResponse *shared.PutRemediationExceptionsResponse
	StatusCode                       int64
}
