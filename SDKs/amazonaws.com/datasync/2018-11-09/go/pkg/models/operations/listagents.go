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
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAgentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
