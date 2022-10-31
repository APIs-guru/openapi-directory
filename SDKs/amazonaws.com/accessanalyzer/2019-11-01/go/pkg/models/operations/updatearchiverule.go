package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateArchiveRulePathParams struct {
	AnalyzerName string `pathParam:"style=simple,explode=false,name=analyzerName"`
	RuleName     string `pathParam:"style=simple,explode=false,name=ruleName"`
}

type UpdateArchiveRuleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateArchiveRuleRequestBody struct {
	ClientToken *string                     `json:"clientToken,omitempty"`
	Filter      map[string]shared.Criterion `json:"filter"`
}

type UpdateArchiveRuleRequest struct {
	PathParams UpdateArchiveRulePathParams
	Headers    UpdateArchiveRuleHeaders
	Request    UpdateArchiveRuleRequestBody `request:"mediaType=application/json"`
}

type UpdateArchiveRuleResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
