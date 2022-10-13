package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDatastorePathParams struct {
	DatastoreName string `pathParam:"style=simple,explode=false,name=datastoreName"`
}

type DescribeDatastoreQueryParams struct {
	IncludeStatistics *bool `queryParam:"style=form,explode=true,name=includeStatistics"`
}

type DescribeDatastoreHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDatastoreRequest struct {
	PathParams  DescribeDatastorePathParams
	QueryParams DescribeDatastoreQueryParams
	Headers     DescribeDatastoreHeaders
}

type DescribeDatastoreResponse struct {
	ContentType                 string
	DescribeDatastoreResponse   *shared.DescribeDatastoreResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
