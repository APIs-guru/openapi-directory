package operations

type UpdateGroupsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type UpdateGroupsDeleteRequest struct {
	PathParams UpdateGroupsDeletePathParams
}

type UpdateGroupsDeleteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
