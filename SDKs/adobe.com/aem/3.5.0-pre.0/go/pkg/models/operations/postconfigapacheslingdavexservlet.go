package operations

type PostConfigApacheSlingDavExServletQueryParams struct {
	Alias                          *string `queryParam:"style=form,explode=true,name=alias"`
	AliasAtTypeHint                *string `queryParam:"style=form,explode=true,name=alias@TypeHint"`
	DavCreateAbsoluteURI           *bool   `queryParam:"style=form,explode=true,name=dav.create-absolute-uri"`
	DavCreateAbsoluteURIAtTypeHint *string `queryParam:"style=form,explode=true,name=dav.create-absolute-uri@TypeHint"`
}

type PostConfigApacheSlingDavExServletRequest struct {
	QueryParams PostConfigApacheSlingDavExServletQueryParams
}

type PostConfigApacheSlingDavExServletResponse struct {
	ContentType string
	StatusCode  int64
}
