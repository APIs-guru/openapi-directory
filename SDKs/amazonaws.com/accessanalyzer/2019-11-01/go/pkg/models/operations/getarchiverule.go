package operations

import (
	"openapi/pkg/models/shared"
)

type GetArchiveRulePathParams struct {
	AnalyzerName string `pathParam:"style=simple,explode=false,name=analyzerName"`
	RuleName     string `pathParam:"style=simple,explode=false,name=ruleName"`
}

type GetArchiveRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetArchiveRuleRequest struct {
	PathParams GetArchiveRulePathParams
	Headers    GetArchiveRuleHeaders
}

type GetArchiveRuleResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetArchiveRuleResponse    *shared.GetArchiveRuleResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
