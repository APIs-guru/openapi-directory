package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCodeReviewHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateCodeReviewRequestBodyType
// <p> The type of a code review. There are two code review types: </p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository. </p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. </p> </li> </ul>
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
