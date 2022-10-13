package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProtocolsListXAmzTargetEnum string

const (
	DeleteProtocolsListXAmzTargetEnumAwsfms20180101DeleteProtocolsList DeleteProtocolsListXAmzTargetEnum = "AWSFMS_20180101.DeleteProtocolsList"
)

type DeleteProtocolsListHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteProtocolsListXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteProtocolsListRequest struct {
	Headers DeleteProtocolsListHeaders
	Request shared.DeleteProtocolsListRequest `request:"mediaType=application/json"`
}

type DeleteProtocolsListResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidOperationException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
