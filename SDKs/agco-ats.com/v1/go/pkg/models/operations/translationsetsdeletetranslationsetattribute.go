package operations

type TranslationSetsDeleteTranslationSetAttributePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=ID"`
}

type TranslationSetsDeleteTranslationSetAttributeRequest struct {
	PathParams TranslationSetsDeleteTranslationSetAttributePathParams
}

type TranslationSetsDeleteTranslationSetAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
