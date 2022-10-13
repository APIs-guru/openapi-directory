package operations

import (
	"openapi/pkg/models/shared"
)

type PutProtocolsListXAmzTargetEnum string

const (
	PutProtocolsListXAmzTargetEnumAwsfms20180101PutProtocolsList PutProtocolsListXAmzTargetEnum = "AWSFMS_20180101.PutProtocolsList"
)

type PutProtocolsListHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutProtocolsListXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutProtocolsListRequest struct {
	Headers PutProtocolsListHeaders
	Request shared.PutProtocolsListRequest `request:"mediaType=application/json"`
}

type PutProtocolsListResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidInputException     *interface{}
	InvalidOperationException *interface{}
	LimitExceededException    *interface{}
	PutProtocolsListResponse  *shared.PutProtocolsListResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
