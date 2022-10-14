package operations

import (
	"openapi/pkg/models/shared"
)

type CreateArchiveRulePathParams struct {
	AnalyzerName string `pathParam:"style=simple,explode=false,name=analyzerName"`
}

type CreateArchiveRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateArchiveRuleRequestBody struct {
	ClientToken *string                     `json:"clientToken,omitempty"`
	Filter      map[string]shared.Criterion `json:"filter"`
	RuleName    string                      `json:"ruleName"`
}

type CreateArchiveRuleRequest struct {
	PathParams CreateArchiveRulePathParams
	Headers    CreateArchiveRuleHeaders
	Request    CreateArchiveRuleRequestBody `request:"mediaType=application/json"`
}

type CreateArchiveRuleResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
