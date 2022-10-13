package operations

type StopThingRegistrationTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type StopThingRegistrationTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StopThingRegistrationTaskRequest struct {
	PathParams StopThingRegistrationTaskPathParams
	Headers    StopThingRegistrationTaskHeaders
}

type StopThingRegistrationTaskResponse struct {
	ContentType                       string
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	StopThingRegistrationTaskResponse map[string]interface{}
	ThrottlingException               *interface{}
	UnauthorizedException             *interface{}
}
