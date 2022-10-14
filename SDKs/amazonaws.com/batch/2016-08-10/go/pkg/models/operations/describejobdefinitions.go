package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeJobDefinitionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeJobDefinitionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeJobDefinitionsRequestBody struct {
	JobDefinitionName *string  `json:"jobDefinitionName,omitempty"`
	JobDefinitions    []string `json:"jobDefinitions,omitempty"`
	MaxResults        *int64   `json:"maxResults,omitempty"`
	NextToken         *string  `json:"nextToken,omitempty"`
	Status            *string  `json:"status,omitempty"`
}

type DescribeJobDefinitionsRequest struct {
	QueryParams DescribeJobDefinitionsQueryParams
	Headers     DescribeJobDefinitionsHeaders
	Request     DescribeJobDefinitionsRequestBody `request:"mediaType=application/json"`
}

type DescribeJobDefinitionsResponse struct {
	ClientException                *interface{}
	ContentType                    string
	DescribeJobDefinitionsResponse *shared.DescribeJobDefinitionsResponse
	ServerException                *interface{}
	StatusCode                     int64
}
