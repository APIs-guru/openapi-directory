package operations

import (
	"openapi/pkg/models/shared"
)

type ListIPRoutesXAmzTargetEnum string

const (
	ListIPRoutesXAmzTargetEnumDirectoryService20150416ListIPRoutes ListIPRoutesXAmzTargetEnum = "DirectoryService_20150416.ListIpRoutes"
)

type ListIPRoutesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListIPRoutesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListIPRoutesRequest struct {
	Headers ListIPRoutesHeaders
	Request shared.ListIPRoutesRequest `request:"mediaType=application/json"`
}

type ListIPRoutesResponse struct {
	ClientException             *interface{}
	ContentType                 string
	EntityDoesNotExistException *interface{}
	InvalidNextTokenException   *interface{}
	InvalidParameterException   *interface{}
	ListIPRoutesResult          *shared.ListIPRoutesResult
	ServiceException            *interface{}
	StatusCode                  int64
}
