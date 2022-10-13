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
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
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
