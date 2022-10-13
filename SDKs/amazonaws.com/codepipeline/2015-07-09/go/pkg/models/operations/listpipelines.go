package operations

import (
	"openapi/pkg/models/shared"
)

type ListPipelinesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListPipelinesXAmzTargetEnum string

const (
	ListPipelinesXAmzTargetEnumCodePipeline20150709ListPipelines ListPipelinesXAmzTargetEnum = "CodePipeline_20150709.ListPipelines"
)

type ListPipelinesHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPipelinesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPipelinesRequest struct {
	QueryParams ListPipelinesQueryParams
	Headers     ListPipelinesHeaders
	Request     shared.ListPipelinesInput `request:"mediaType=application/json"`
}

type ListPipelinesResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListPipelinesOutput       *shared.ListPipelinesOutput
	StatusCode                int64
	ValidationException       *interface{}
}
