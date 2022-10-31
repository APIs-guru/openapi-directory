package operations

type PostConfigAemHealthCheckServletQueryParams struct {
	BundlesIgnored           []string `queryParam:"style=form,explode=true,name=bundles.ignored"`
	BundlesIgnoredAtTypeHint *string  `queryParam:"style=form,explode=true,name=bundles.ignored@TypeHint"`
}

type PostConfigAemHealthCheckServletRequest struct {
	QueryParams PostConfigAemHealthCheckServletQueryParams
}

type PostConfigAemHealthCheckServletResponse struct {
	ContentType string
	StatusCode  int64
}
