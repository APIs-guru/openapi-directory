package operations

type ApplyArchiveRuleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ApplyArchiveRuleRequestBody struct {
	AnalyzerArn string  `json:"analyzerArn"`
	ClientToken *string `json:"clientToken,omitempty"`
	RuleName    string  `json:"ruleName"`
}

type ApplyArchiveRuleRequest struct {
	Headers ApplyArchiveRuleHeaders
	Request ApplyArchiveRuleRequestBody `request:"mediaType=application/json"`
}

type ApplyArchiveRuleResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
