package operations

import (
	"openapi/pkg/models/shared"
)

type ListCreatedArtifactsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCreatedArtifactsXAmzTargetEnum string

const (
	ListCreatedArtifactsXAmzTargetEnumAwsMigrationHubListCreatedArtifacts ListCreatedArtifactsXAmzTargetEnum = "AWSMigrationHub.ListCreatedArtifacts"
)

type ListCreatedArtifactsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCreatedArtifactsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCreatedArtifactsRequest struct {
	QueryParams ListCreatedArtifactsQueryParams
	Headers     ListCreatedArtifactsHeaders
	Request     shared.ListCreatedArtifactsRequest `request:"mediaType=application/json"`
}

type ListCreatedArtifactsResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	HomeRegionNotSetException   *interface{}
	InternalServerError         *interface{}
	InvalidInputException       *interface{}
	ListCreatedArtifactsResult  *shared.ListCreatedArtifactsResult
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
