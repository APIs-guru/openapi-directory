package operations

type AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionPathParams struct {
	ID         string `pathParam:"style=simple,explode=false,name=ID"`
	CategoryID string `pathParam:"style=simple,explode=false,name=categoryID"`
}

type AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionRequest struct {
	PathParams AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionPathParams
}

type AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
