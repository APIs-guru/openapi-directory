package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEventTopicsXAmzTargetEnum string

const (
	DescribeEventTopicsXAmzTargetEnumDirectoryService20150416DescribeEventTopics DescribeEventTopicsXAmzTargetEnum = "DirectoryService_20150416.DescribeEventTopics"
)

type DescribeEventTopicsHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEventTopicsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
