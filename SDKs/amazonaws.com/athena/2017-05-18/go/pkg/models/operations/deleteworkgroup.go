package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkGroupXAmzTargetEnum string

const (
	DeleteWorkGroupXAmzTargetEnumAmazonAthenaDeleteWorkGroup DeleteWorkGroupXAmzTargetEnum = "AmazonAthena.DeleteWorkGroup"
)

type DeleteWorkGroupHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWorkGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteWorkGroupRequest struct {
	Headers DeleteWorkGroupHeaders
	Request shared.DeleteWorkGroupInput `request:"mediaType=application/json"`
}

type DeleteWorkGroupResponse struct {
	ContentType             string
	DeleteWorkGroupOutput   map[string]interface{}
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
