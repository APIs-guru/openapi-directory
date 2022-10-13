package operations

import (
	"openapi/pkg/models/shared"
)

type ListTaskDefinitionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTaskDefinitionsXAmzTargetEnum string

const (
	ListTaskDefinitionsXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListTaskDefinitions ListTaskDefinitionsXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions"
)

type ListTaskDefinitionsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTaskDefinitionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTaskDefinitionsRequest struct {
	QueryParams ListTaskDefinitionsQueryParams
	Headers     ListTaskDefinitionsHeaders
	Request     shared.ListTaskDefinitionsRequest `request:"mediaType=application/json"`
}

type ListTaskDefinitionsResponse struct {
	ClientException             *interface{}
	ContentType                 string
	InvalidParameterException   *interface{}
	ListTaskDefinitionsResponse *shared.ListTaskDefinitionsResponse
	ServerException             *interface{}
	StatusCode                  int64
}
