package operations

type UserContentDefinitionsDeleteUserContentDefinitionPathParams struct {
	UserContentDefinitionID int32 `pathParam:"style=simple,explode=false,name=userContentDefinitionID"`
}

type UserContentDefinitionsDeleteUserContentDefinitionRequest struct {
	PathParams UserContentDefinitionsDeleteUserContentDefinitionPathParams
}

type UserContentDefinitionsDeleteUserContentDefinitionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
