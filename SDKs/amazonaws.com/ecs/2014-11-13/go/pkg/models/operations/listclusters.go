package operations

import (
	"openapi/pkg/models/shared"
)

type ListClustersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListClustersXAmzTargetEnum string

const (
	ListClustersXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListClusters ListClustersXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.ListClusters"
)

type ListClustersHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListClustersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListClustersRequest struct {
	QueryParams ListClustersQueryParams
	Headers     ListClustersHeaders
	Request     shared.ListClustersRequest `request:"mediaType=application/json"`
}

type ListClustersResponse struct {
	ClientException           *interface{}
	ContentType               string
	InvalidParameterException *interface{}
	ListClustersResponse      *shared.ListClustersResponse
	ServerException           *interface{}
	StatusCode                int64
}
