package operations

import (
	"openapi/pkg/models/shared"
)

type GetProtocolsListXAmzTargetEnum string

const (
	GetProtocolsListXAmzTargetEnumAwsfms20180101GetProtocolsList GetProtocolsListXAmzTargetEnum = "AWSFMS_20180101.GetProtocolsList"
)

type GetProtocolsListHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetProtocolsListXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetProtocolsListRequest struct {
	Headers GetProtocolsListHeaders
	Request shared.GetProtocolsListRequest `request:"mediaType=application/json"`
}

type GetProtocolsListResponse struct {
	ContentType               string
	GetProtocolsListResponse  *shared.GetProtocolsListResponse
	InternalErrorException    *interface{}
	InvalidOperationException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
