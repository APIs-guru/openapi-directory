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
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRulesPackagesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
