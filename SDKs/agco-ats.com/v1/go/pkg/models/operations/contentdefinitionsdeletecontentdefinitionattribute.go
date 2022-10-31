package operations

type ContentDefinitionsDeleteContentDefinitionAttributePathParams struct {
	ContentDefinitionAttributeID int32 `pathParam:"style=simple,explode=false,name=contentDefinitionAttributeID"`
}

type ContentDefinitionsDeleteContentDefinitionAttributeRequest struct {
	PathParams ContentDefinitionsDeleteContentDefinitionAttributePathParams
}

type ContentDefinitionsDeleteContentDefinitionAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
