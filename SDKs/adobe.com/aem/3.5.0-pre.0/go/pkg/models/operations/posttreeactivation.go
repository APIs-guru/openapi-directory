package operations

type PostTreeActivationQueryParams struct {
	Ignoredeactivated bool   `queryParam:"style=form,explode=true,name=ignoredeactivated"`
	Onlymodified      bool   `queryParam:"style=form,explode=true,name=onlymodified"`
	Path              string `queryParam:"style=form,explode=true,name=path"`
}

type PostTreeActivationRequest struct {
	QueryParams PostTreeActivationQueryParams
}

type PostTreeActivationResponse struct {
	ContentType string
	StatusCode  int64
}
