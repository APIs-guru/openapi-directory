package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSharedDirectoriesXAmzTargetEnum string

const (
	DescribeSharedDirectoriesXAmzTargetEnumDirectoryService20150416DescribeSharedDirectories DescribeSharedDirectoriesXAmzTargetEnum = "DirectoryService_20150416.DescribeSharedDirectories"
)

type DescribeSharedDirectoriesHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSharedDirectoriesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeSharedDirectoriesRequest struct {
	Headers DescribeSharedDirectoriesHeaders
	Request shared.DescribeSharedDirectoriesRequest `request:"mediaType=application/json"`
}

type DescribeSharedDirectoriesResponse struct {
	ClientException                 *interface{}
	ContentType                     string
	DescribeSharedDirectoriesResult *shared.DescribeSharedDirectoriesResult
	EntityDoesNotExistException     *interface{}
	InvalidNextTokenException       *interface{}
	InvalidParameterException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnsupportedOperationException   *interface{}
}
