package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFileSystemsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeFileSystemsXAmzTargetEnum string

const (
	DescribeFileSystemsXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeFileSystems DescribeFileSystemsXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DescribeFileSystems"
)

type DescribeFileSystemsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFileSystemsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFileSystemsRequest struct {
	QueryParams DescribeFileSystemsQueryParams
	Headers     DescribeFileSystemsHeaders
	Request     shared.DescribeFileSystemsRequest `request:"mediaType=application/json"`
}

type DescribeFileSystemsResponse struct {
	BadRequest                  *interface{}
	ContentType                 string
	DescribeFileSystemsResponse *shared.DescribeFileSystemsResponse
	FileSystemNotFound          *interface{}
	InternalServerError         *interface{}
	StatusCode                  int64
}
