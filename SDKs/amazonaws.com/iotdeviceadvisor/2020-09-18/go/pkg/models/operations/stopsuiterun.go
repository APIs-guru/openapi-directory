package operations

type StopSuiteRunPathParams struct {
	SuiteDefinitionID string `pathParam:"style=simple,explode=false,name=suiteDefinitionId"`
	SuiteRunID        string `pathParam:"style=simple,explode=false,name=suiteRunId"`
}

type StopSuiteRunHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StopSuiteRunRequest struct {
	PathParams StopSuiteRunPathParams
	Headers    StopSuiteRunHeaders
}

type StopSuiteRunResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	StopSuiteRunResponse      map[string]interface{}
	ValidationException       *interface{}
}
