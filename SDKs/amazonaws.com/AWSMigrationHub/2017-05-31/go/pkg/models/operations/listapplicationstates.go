package operations

import (
	"openapi/pkg/models/shared"
)

type ListApplicationStatesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListApplicationStatesXAmzTargetEnum string

const (
	ListApplicationStatesXAmzTargetEnumAwsMigrationHubListApplicationStates ListApplicationStatesXAmzTargetEnum = "AWSMigrationHub.ListApplicationStates"
)

type ListApplicationStatesHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListApplicationStatesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListApplicationStatesRequest struct {
	QueryParams ListApplicationStatesQueryParams
	Headers     ListApplicationStatesHeaders
	Request     shared.ListApplicationStatesRequest `request:"mediaType=application/json"`
}

type ListApplicationStatesResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	HomeRegionNotSetException   *interface{}
	InternalServerError         *interface{}
	InvalidInputException       *interface{}
	ListApplicationStatesResult *shared.ListApplicationStatesResult
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
