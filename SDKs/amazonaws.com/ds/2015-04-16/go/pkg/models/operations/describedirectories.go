package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDirectoriesXAmzTargetEnum string

const (
	DescribeDirectoriesXAmzTargetEnumDirectoryService20150416DescribeDirectories DescribeDirectoriesXAmzTargetEnum = "DirectoryService_20150416.DescribeDirectories"
)

type DescribeDirectoriesHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDirectoriesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDirectoriesRequest struct {
	Headers DescribeDirectoriesHeaders
	Request shared.DescribeDirectoriesRequest `request:"mediaType=application/json"`
}

type DescribeDirectoriesResponse struct {
	ClientException             *interface{}
	ContentType                 string
	DescribeDirectoriesResult   *shared.DescribeDirectoriesResult
	EntityDoesNotExistException *interface{}
	InvalidNextTokenException   *interface{}
	InvalidParameterException   *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
}
