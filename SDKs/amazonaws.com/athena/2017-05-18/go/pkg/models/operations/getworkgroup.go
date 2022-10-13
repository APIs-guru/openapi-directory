package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkGroupXAmzTargetEnum string

const (
	GetWorkGroupXAmzTargetEnumAmazonAthenaGetWorkGroup GetWorkGroupXAmzTargetEnum = "AmazonAthena.GetWorkGroup"
)

type GetWorkGroupHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetWorkGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetWorkGroupRequest struct {
	Headers GetWorkGroupHeaders
	Request shared.GetWorkGroupInput `request:"mediaType=application/json"`
}

type GetWorkGroupResponse struct {
	ContentType             string
	GetWorkGroupOutput      *shared.GetWorkGroupOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
