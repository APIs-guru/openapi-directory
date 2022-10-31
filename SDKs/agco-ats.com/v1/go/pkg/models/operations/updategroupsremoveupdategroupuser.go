package operations

type UpdateGroupsRemoveUpdateGroupUserPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	UserID int32  `pathParam:"style=simple,explode=false,name=userID"`
}

type UpdateGroupsRemoveUpdateGroupUserRequest struct {
	PathParams UpdateGroupsRemoveUpdateGroupUserPathParams
}

type UpdateGroupsRemoveUpdateGroupUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
