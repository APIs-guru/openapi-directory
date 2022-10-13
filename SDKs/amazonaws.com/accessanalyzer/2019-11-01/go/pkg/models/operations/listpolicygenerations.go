package operations

import (
	"openapi/pkg/models/shared"
)

type ListPolicyGenerationsQueryParams struct {
	MaxResults   *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken    *string `queryParam:"style=form,explode=true,name=nextToken"`
	PrincipalArn *string `queryParam:"style=form,explode=true,name=principalArn"`
}

type ListPolicyGenerationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListPolicyGenerationsRequest struct {
	QueryParams ListPolicyGenerationsQueryParams
	Headers     ListPolicyGenerationsHeaders
}

type ListPolicyGenerationsResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ListPolicyGenerationsResponse *shared.ListPolicyGenerationsResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
