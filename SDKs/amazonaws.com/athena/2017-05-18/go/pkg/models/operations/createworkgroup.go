package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkGroupXAmzTargetEnum string

const (
	CreateWorkGroupXAmzTargetEnumAmazonAthenaCreateWorkGroup CreateWorkGroupXAmzTargetEnum = "AmazonAthena.CreateWorkGroup"
)

type CreateWorkGroupHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWorkGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateWorkGroupRequest struct {
	Headers CreateWorkGroupHeaders
	Request shared.CreateWorkGroupInput `request:"mediaType=application/json"`
}

type CreateWorkGroupResponse struct {
	ContentType             string
	CreateWorkGroupOutput   map[string]interface{}
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
