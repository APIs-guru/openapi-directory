package operations

type DeleteProfilingGroupPathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type DeleteProfilingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteProfilingGroupRequest struct {
	PathParams DeleteProfilingGroupPathParams
	Headers    DeleteProfilingGroupHeaders
}

type DeleteProfilingGroupResponse struct {
	ConflictException            *interface{}
	ContentType                  string
	DeleteProfilingGroupResponse map[string]interface{}
	InternalServerException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	ValidationException          *interface{}
}
