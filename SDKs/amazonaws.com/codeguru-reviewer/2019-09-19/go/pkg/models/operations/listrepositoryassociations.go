package operations

import (
	"openapi/pkg/models/shared"
)

type ListRepositoryAssociationsQueryParams struct {
	MaxResults   *int64                                  `queryParam:"style=form,explode=true,name=MaxResults"`
	Name         []string                                `queryParam:"style=form,explode=true,name=Name"`
	NextToken    *string                                 `queryParam:"style=form,explode=true,name=NextToken"`
	Owner        []string                                `queryParam:"style=form,explode=true,name=Owner"`
	ProviderType []shared.ProviderTypeEnum               `queryParam:"style=form,explode=true,name=ProviderType"`
	State        []shared.RepositoryAssociationStateEnum `queryParam:"style=form,explode=true,name=State"`
}

type ListRepositoryAssociationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListRepositoryAssociationsRequest struct {
	QueryParams ListRepositoryAssociationsQueryParams
	Headers     ListRepositoryAssociationsHeaders
}

type ListRepositoryAssociationsResponse struct {
	ContentType                        string
	InternalServerException            *interface{}
	ListRepositoryAssociationsResponse *shared.ListRepositoryAssociationsResponse
	StatusCode                         int64
	ThrottlingException                *interface{}
	ValidationException                *interface{}
}
