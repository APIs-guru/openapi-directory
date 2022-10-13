package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAccessPreviewHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAccessPreviewRequestBody struct {
	AnalyzerArn    string                          `json:"analyzerArn"`
	ClientToken    *string                         `json:"clientToken"`
	Configurations map[string]shared.Configuration `json:"configurations"`
}

type CreateAccessPreviewRequest struct {
	Headers CreateAccessPreviewHeaders
	Request CreateAccessPreviewRequestBody `request:"mediaType=application/json"`
}

type CreateAccessPreviewResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateAccessPreviewResponse   *shared.CreateAccessPreviewResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
