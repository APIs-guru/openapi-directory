package operations

type DeleteGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type DeleteGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteGroupRequest struct {
	PathParams DeleteGroupPathParams
	Headers    DeleteGroupHeaders
}

type DeleteGroupResponse struct {
	BadRequestException *interface{}
	ContentType         string
	DeleteGroupResponse map[string]interface{}
	StatusCode          int64
}
