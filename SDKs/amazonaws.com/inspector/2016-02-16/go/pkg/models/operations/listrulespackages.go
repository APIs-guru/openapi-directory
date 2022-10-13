package operations

import (
	"openapi/pkg/models/shared"
)

type ListRulesPackagesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListRulesPackagesXAmzTargetEnum string

const (
	ListRulesPackagesXAmzTargetEnumInspectorServiceListRulesPackages ListRulesPackagesXAmzTargetEnum = "InspectorService.ListRulesPackages"
)

type ListRulesPackagesHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRulesPackagesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRulesPackagesRequest struct {
	QueryParams ListRulesPackagesQueryParams
	Headers     ListRulesPackagesHeaders
	Request     shared.ListRulesPackagesRequest `request:"mediaType=application/json"`
}

type ListRulesPackagesResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalException         *interface{}
	InvalidInputException     *interface{}
	ListRulesPackagesResponse *shared.ListRulesPackagesResponse
	StatusCode                int64
}
