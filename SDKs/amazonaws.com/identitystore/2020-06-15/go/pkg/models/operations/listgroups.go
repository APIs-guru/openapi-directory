package operations

import (
	"openapi/pkg/models/shared"
)

type ListGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListGroupsXAmzTargetEnum string

const (
	ListGroupsXAmzTargetEnumAwsIdentityStoreListGroups ListGroupsXAmzTargetEnum = "AWSIdentityStore.ListGroups"
)

type ListGroupsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListGroupsRequest struct {
	QueryParams ListGroupsQueryParams
	Headers     ListGroupsHeaders
	Request     shared.ListGroupsRequest `request:"mediaType=application/json"`
}

type ListGroupsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListGroupsResponse        *shared.ListGroupsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
