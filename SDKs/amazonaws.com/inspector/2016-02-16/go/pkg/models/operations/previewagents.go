package operations

import (
	"openapi/pkg/models/shared"
)

type PreviewAgentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type PreviewAgentsXAmzTargetEnum string

const (
	PreviewAgentsXAmzTargetEnumInspectorServicePreviewAgents PreviewAgentsXAmzTargetEnum = "InspectorService.PreviewAgents"
)

type PreviewAgentsHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PreviewAgentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PreviewAgentsRequest struct {
	QueryParams PreviewAgentsQueryParams
	Headers     PreviewAgentsHeaders
	Request     shared.PreviewAgentsRequest `request:"mediaType=application/json"`
}

type PreviewAgentsResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	InternalException                *interface{}
	InvalidCrossAccountRoleException *interface{}
	InvalidInputException            *interface{}
	NoSuchEntityException            *interface{}
	PreviewAgentsResponse            *shared.PreviewAgentsResponse
	StatusCode                       int64
}
