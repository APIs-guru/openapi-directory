package operations

type PostAgentProfilePathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type PostAgentProfileQueryParams struct {
	ProfileToken *string `queryParam:"style=form,explode=true,name=profileToken"`
}

type PostAgentProfileHeaders struct {
	ContentType       string  `header:"style=simple,explode=false,name=Content-Type"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAgentProfileRequestBody struct {
	AgentProfile string `json:"agentProfile"`
}

type PostAgentProfileRequest struct {
	PathParams  PostAgentProfilePathParams
	QueryParams PostAgentProfileQueryParams
	Headers     PostAgentProfileHeaders
	Request     PostAgentProfileRequestBody `request:"mediaType=application/json"`
}

type PostAgentProfileResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	PostAgentProfileResponse  map[string]interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
