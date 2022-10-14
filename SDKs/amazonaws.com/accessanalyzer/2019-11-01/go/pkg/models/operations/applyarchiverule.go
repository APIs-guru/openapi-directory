package operations

type ApplyArchiveRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
