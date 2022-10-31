package operations

import (
	"openapi/pkg/models/shared"
)

type ListContainerInstancesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListContainerInstancesXAmzTargetEnum string

const (
	ListContainerInstancesXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListContainerInstances ListContainerInstancesXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.ListContainerInstances"
)

type ListContainerInstancesHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListContainerInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListContainerInstancesRequest struct {
	QueryParams ListContainerInstancesQueryParams
	Headers     ListContainerInstancesHeaders
	Request     shared.ListContainerInstancesRequest `request:"mediaType=application/json"`
}

type ListContainerInstancesResponse struct {
	ClientException                *interface{}
	ClusterNotFoundException       *interface{}
	ContentType                    string
	InvalidParameterException      *interface{}
	ListContainerInstancesResponse *shared.ListContainerInstancesResponse
	ServerException                *interface{}
	StatusCode                     int64
}
