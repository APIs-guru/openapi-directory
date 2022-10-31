package operations

import (
	"openapi/pkg/models/shared"
)

type ListTasksQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTasksXAmzTargetEnum string

const (
	ListTasksXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListTasks ListTasksXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.ListTasks"
)

type ListTasksHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTasksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTasksRequest struct {
	QueryParams ListTasksQueryParams
	Headers     ListTasksHeaders
	Request     shared.ListTasksRequest `request:"mediaType=application/json"`
}

type ListTasksResponse struct {
	ClientException           *interface{}
	ClusterNotFoundException  *interface{}
	ContentType               string
	InvalidParameterException *interface{}
	ListTasksResponse         *shared.ListTasksResponse
	ServerException           *interface{}
	ServiceNotFoundException  *interface{}
	StatusCode                int64
}
