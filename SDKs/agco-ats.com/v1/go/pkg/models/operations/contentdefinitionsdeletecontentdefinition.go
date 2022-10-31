package operations

type ContentDefinitionsDeleteContentDefinitionPathParams struct {
	ContentDefinitionID int32 `pathParam:"style=simple,explode=false,name=contentDefinitionID"`
}

type ContentDefinitionsDeleteContentDefinitionRequest struct {
	PathParams ContentDefinitionsDeleteContentDefinitionPathParams
}

type ContentDefinitionsDeleteContentDefinitionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
