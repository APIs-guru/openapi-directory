package operations

type UpdateGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type UpdateGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateGroupRequestBody struct {
	Name *string `json:"Name,omitempty"`
}

type UpdateGroupRequest struct {
	PathParams UpdateGroupPathParams
	Headers    UpdateGroupHeaders
	Request    UpdateGroupRequestBody `request:"mediaType=application/json"`
}

type UpdateGroupResponse struct {
	BadRequestException *interface{}
	ContentType         string
	StatusCode          int64
	UpdateGroupResponse map[string]interface{}
}
