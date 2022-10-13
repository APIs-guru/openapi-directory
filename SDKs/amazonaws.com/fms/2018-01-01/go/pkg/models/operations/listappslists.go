package operations

import (
	"openapi/pkg/models/shared"
)

type ListAppsListsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAppsListsXAmzTargetEnum string

const (
	ListAppsListsXAmzTargetEnumAwsfms20180101ListAppsLists ListAppsListsXAmzTargetEnum = "AWSFMS_20180101.ListAppsLists"
)

type ListAppsListsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAppsListsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAppsListsRequest struct {
	QueryParams ListAppsListsQueryParams
	Headers     ListAppsListsHeaders
	Request     shared.ListAppsListsRequest `request:"mediaType=application/json"`
}

type ListAppsListsResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidOperationException *interface{}
	LimitExceededException    *interface{}
	ListAppsListsResponse     *shared.ListAppsListsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
