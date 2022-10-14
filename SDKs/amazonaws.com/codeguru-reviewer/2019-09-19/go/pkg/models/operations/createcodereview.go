package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCodeReviewHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateCodeReviewRequestBodyType struct {
	AnalysisTypes      []shared.AnalysisTypeEnum  `json:"AnalysisTypes,omitempty"`
	RepositoryAnalysis *shared.RepositoryAnalysis `json:"RepositoryAnalysis,omitempty"`
}

type CreateCodeReviewRequestBody struct {
	ClientRequestToken       *string                         `json:"ClientRequestToken,omitempty"`
	Name                     string                          `json:"Name"`
	RepositoryAssociationArn string                          `json:"RepositoryAssociationArn"`
	Type                     CreateCodeReviewRequestBodyType `json:"Type"`
}

type CreateCodeReviewRequest struct {
	Headers CreateCodeReviewHeaders
	Request CreateCodeReviewRequestBody `request:"mediaType=application/json"`
}

type CreateCodeReviewResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	CreateCodeReviewResponse  *shared.CreateCodeReviewResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
