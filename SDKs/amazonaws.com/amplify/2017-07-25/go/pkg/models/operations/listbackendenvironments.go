package operations

import (
	"openapi/pkg/models/shared"
)

type ListBackendEnvironmentsPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type ListBackendEnvironmentsQueryParams struct {
	EnvironmentName *string `queryParam:"style=form,explode=true,name=environmentName"`
	MaxResults      *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken       *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBackendEnvironmentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListBackendEnvironmentsRequest struct {
	PathParams  ListBackendEnvironmentsPathParams
	QueryParams ListBackendEnvironmentsQueryParams
	Headers     ListBackendEnvironmentsHeaders
}

type ListBackendEnvironmentsResponse struct {
	BadRequestException           *interface{}
	ContentType                   string
	InternalFailureException      *interface{}
	ListBackendEnvironmentsResult *shared.ListBackendEnvironmentsResult
	StatusCode                    int64
	UnauthorizedException         *interface{}
}
