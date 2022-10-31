package operations

type SearchFlightOffersHeaders struct {
	XHTTPMethodOverride string `header:"style=simple,explode=false,name=X-HTTP-Method-Override"`
}

type SearchFlightOffersRequest struct {
	Headers SearchFlightOffersHeaders
	Request interface{} `request:"mediaType=application/vnd.amadeus+json"`
}

type SearchFlightOffersResponse struct {
	ContentType string
	Error400    *interface{}
	Error500    *interface{}
	StatusCode  int64
	Success     *interface{}
}
