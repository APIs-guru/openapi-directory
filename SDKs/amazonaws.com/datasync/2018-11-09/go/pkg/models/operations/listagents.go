package operations

import (
	"openapi/pkg/models/shared"
)

type ListAgentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAgentsXAmzTargetEnum string

const (
	ListAgentsXAmzTargetEnumFmrsServiceListAgents ListAgentsXAmzTargetEnum = "FmrsService.ListAgents"
)

type ListAgentsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAgentsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAgentsRequest struct {
	QueryParams ListAgentsQueryParams
	Headers     ListAgentsHeaders
	Request     shared.ListAgentsRequest `request:"mediaType=application/json"`
}

type ListAgentsResponse struct {
	ContentType             string
	InternalException       *interface{}
	InvalidRequestException *interface{}
	ListAgentsResponse      *shared.ListAgentsResponse
	StatusCode              int64
}
