package operations

import (
	"openapi/pkg/models/shared"
)

type ListProtocolsListsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListProtocolsListsXAmzTargetEnum string

const (
	ListProtocolsListsXAmzTargetEnumAwsfms20180101ListProtocolsLists ListProtocolsListsXAmzTargetEnum = "AWSFMS_20180101.ListProtocolsLists"
)

type ListProtocolsListsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListProtocolsListsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListProtocolsListsRequest struct {
	QueryParams ListProtocolsListsQueryParams
	Headers     ListProtocolsListsHeaders
	Request     shared.ListProtocolsListsRequest `request:"mediaType=application/json"`
}

type ListProtocolsListsResponse struct {
	ContentType                string
	InternalErrorException     *interface{}
	InvalidOperationException  *interface{}
	ListProtocolsListsResponse *shared.ListProtocolsListsResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
