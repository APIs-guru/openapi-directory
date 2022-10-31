package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWorkGroupXAmzTargetEnum string

const (
	UpdateWorkGroupXAmzTargetEnumAmazonAthenaUpdateWorkGroup UpdateWorkGroupXAmzTargetEnum = "AmazonAthena.UpdateWorkGroup"
)

type UpdateWorkGroupHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateWorkGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
