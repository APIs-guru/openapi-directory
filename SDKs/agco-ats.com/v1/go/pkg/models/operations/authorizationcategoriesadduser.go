package operations

type AuthorizationCategoriesAddUserPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	UserID int32  `pathParam:"style=simple,explode=false,name=userID"`
}

type AuthorizationCategoriesAddUserRequest struct {
	PathParams AuthorizationCategoriesAddUserPathParams
}

type AuthorizationCategoriesAddUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
