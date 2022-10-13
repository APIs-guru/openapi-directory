package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEventTopicsXAmzTargetEnum string

const (
	DescribeEventTopicsXAmzTargetEnumDirectoryService20150416DescribeEventTopics DescribeEventTopicsXAmzTargetEnum = "DirectoryService_20150416.DescribeEventTopics"
)

type DescribeEventTopicsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEventTopicsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEventTopicsRequest struct {
	Headers DescribeEventTopicsHeaders
	Request shared.DescribeEventTopicsRequest `request:"mediaType=application/json"`
}

type DescribeEventTopicsResponse struct {
	ClientException             *interface{}
	ContentType                 string
	DescribeEventTopicsResult   *shared.DescribeEventTopicsResult
	EntityDoesNotExistException *interface{}
	InvalidParameterException   *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
}
