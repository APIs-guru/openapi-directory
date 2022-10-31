package operations

import (
	"openapi/pkg/models/shared"
)

type ListAttributesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAttributesXAmzTargetEnum string

const (
	ListAttributesXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListAttributes ListAttributesXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.ListAttributes"
)

type ListAttributesHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListAttributesRequest struct {
	QueryParams ListAttributesQueryParams
	Headers     ListAttributesHeaders
	Request     shared.ListAttributesRequest `request:"mediaType=application/json"`
}

type ListAttributesResponse struct {
	ClusterNotFoundException  *interface{}
	ContentType               string
	InvalidParameterException *interface{}
	ListAttributesResponse    *shared.ListAttributesResponse
	StatusCode                int64
}
