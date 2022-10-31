package operations

import (
	"openapi/pkg/models/shared"
)

type PutProtocolsListXAmzTargetEnum string

const (
	PutProtocolsListXAmzTargetEnumAwsfms20180101PutProtocolsList PutProtocolsListXAmzTargetEnum = "AWSFMS_20180101.PutProtocolsList"
)

type PutProtocolsListHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutProtocolsListXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
