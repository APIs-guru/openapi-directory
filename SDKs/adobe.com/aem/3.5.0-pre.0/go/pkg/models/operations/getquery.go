package operations

type GetQueryQueryParams struct {
	OneProperty      string  `queryParam:"style=form,explode=true,name=1_property"`
	OnePropertyValue string  `queryParam:"style=form,explode=true,name=1_property.value"`
	PLimit           float64 `queryParam:"style=form,explode=true,name=p.limit"`
	Path             string  `queryParam:"style=form,explode=true,name=path"`
}

type GetQueryRequest struct {
	QueryParams GetQueryQueryParams
}

type GetQueryResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetQueryDefaultApplicationJSONString *string
}
