package operations

import (
	"openapi/pkg/models/shared"
)

type ListProgressUpdateStreamsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListProgressUpdateStreamsXAmzTargetEnum string

const (
	ListProgressUpdateStreamsXAmzTargetEnumAwsMigrationHubListProgressUpdateStreams ListProgressUpdateStreamsXAmzTargetEnum = "AWSMigrationHub.ListProgressUpdateStreams"
)

type ListProgressUpdateStreamsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListProgressUpdateStreamsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListProgressUpdateStreamsRequest struct {
	QueryParams ListProgressUpdateStreamsQueryParams
	Headers     ListProgressUpdateStreamsHeaders
	Request     shared.ListProgressUpdateStreamsRequest `request:"mediaType=application/json"`
}

type ListProgressUpdateStreamsResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	HomeRegionNotSetException       *interface{}
	InternalServerError             *interface{}
	InvalidInputException           *interface{}
	ListProgressUpdateStreamsResult *shared.ListProgressUpdateStreamsResult
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
}
