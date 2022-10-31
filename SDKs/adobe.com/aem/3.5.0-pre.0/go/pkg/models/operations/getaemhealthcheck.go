package operations

type GetAemHealthCheckQueryParams struct {
	CombineTagsOr *bool   `queryParam:"style=form,explode=true,name=combineTagsOr"`
	Tags          *string `queryParam:"style=form,explode=true,name=tags"`
}

type GetAemHealthCheckRequest struct {
	QueryParams GetAemHealthCheckQueryParams
}

type GetAemHealthCheckResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetAemHealthCheckDefaultApplicationJSONString *string
}
