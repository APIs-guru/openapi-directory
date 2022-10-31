package operations

type UpdateGroupsAddUpdateGroupUserPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	UserID int32  `pathParam:"style=simple,explode=false,name=userID"`
}

type UpdateGroupsAddUpdateGroupUserRequest struct {
	PathParams UpdateGroupsAddUpdateGroupUserPathParams
}

type UpdateGroupsAddUpdateGroupUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
