package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWorkGroupXAmzTargetEnum string

const (
	UpdateWorkGroupXAmzTargetEnumAmazonAthenaUpdateWorkGroup UpdateWorkGroupXAmzTargetEnum = "AmazonAthena.UpdateWorkGroup"
)

type UpdateWorkGroupHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateWorkGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateWorkGroupRequest struct {
	Headers UpdateWorkGroupHeaders
	Request shared.UpdateWorkGroupInput `request:"mediaType=application/json"`
}

type UpdateWorkGroupResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
	UpdateWorkGroupOutput   map[string]interface{}
}
