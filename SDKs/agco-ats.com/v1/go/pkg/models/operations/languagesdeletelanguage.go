package operations

type LanguagesDeleteLanguagePathParams struct {
	LocaleID int32 `pathParam:"style=simple,explode=false,name=LocaleID"`
}

type LanguagesDeleteLanguageRequest struct {
	PathParams LanguagesDeleteLanguagePathParams
}

type LanguagesDeleteLanguageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
