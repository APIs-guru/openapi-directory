package operations

import (
	"openapi/pkg/models/shared"
)

type ListServicesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListServicesXAmzTargetEnum string

const (
	ListServicesXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListServices ListServicesXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.ListServices"
)

type ListServicesHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServicesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListServicesRequest struct {
	QueryParams ListServicesQueryParams
	Headers     ListServicesHeaders
	Request     shared.ListServicesRequest `request:"mediaType=application/json"`
}

type ListServicesResponse struct {
	ClientException           *interface{}
	ClusterNotFoundException  *interface{}
	ContentType               string
	InvalidParameterException *interface{}
	ListServicesResponse      *shared.ListServicesResponse
	ServerException           *interface{}
	StatusCode                int64
}
