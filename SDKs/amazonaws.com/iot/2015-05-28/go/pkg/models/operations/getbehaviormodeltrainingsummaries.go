package operations

import (
	"openapi/pkg/models/shared"
)

type GetBehaviorModelTrainingSummariesQueryParams struct {
	MaxResults          *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken           *string `queryParam:"style=form,explode=true,name=nextToken"`
	SecurityProfileName *string `queryParam:"style=form,explode=true,name=securityProfileName"`
}

type GetBehaviorModelTrainingSummariesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBehaviorModelTrainingSummariesRequest struct {
	QueryParams GetBehaviorModelTrainingSummariesQueryParams
	Headers     GetBehaviorModelTrainingSummariesHeaders
}

type GetBehaviorModelTrainingSummariesResponse struct {
	ContentType                               string
	GetBehaviorModelTrainingSummariesResponse *shared.GetBehaviorModelTrainingSummariesResponse
	InternalFailureException                  *interface{}
	InvalidRequestException                   *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	ThrottlingException                       *interface{}
}
