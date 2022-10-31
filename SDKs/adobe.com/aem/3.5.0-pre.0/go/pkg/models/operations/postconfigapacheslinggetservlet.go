package operations

type PostConfigApacheSlingGetServletQueryParams struct {
	EnableHTML                   *bool   `queryParam:"style=form,explode=true,name=enable.html"`
	EnableHTMLAtTypeHint         *string `queryParam:"style=form,explode=true,name=enable.html@TypeHint"`
	EnableTxt                    *bool   `queryParam:"style=form,explode=true,name=enable.txt"`
	EnableTxtAtTypeHint          *string `queryParam:"style=form,explode=true,name=enable.txt@TypeHint"`
	EnableXML                    *bool   `queryParam:"style=form,explode=true,name=enable.xml"`
	EnableXMLAtTypeHint          *string `queryParam:"style=form,explode=true,name=enable.xml@TypeHint"`
	JSONMaximumresults           *string `queryParam:"style=form,explode=true,name=json.maximumresults"`
	JSONMaximumresultsAtTypeHint *string `queryParam:"style=form,explode=true,name=json.maximumresults@TypeHint"`
}

type PostConfigApacheSlingGetServletRequest struct {
	QueryParams PostConfigApacheSlingGetServletQueryParams
}

type PostConfigApacheSlingGetServletResponse struct {
	ContentType string
	StatusCode  int64
}
