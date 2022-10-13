package operations

type SignRetrieveHeadPathParams struct {
	Job string `pathParam:"style=simple,explode=false,name=job"`
}

type SignRetrieveHeadRequest struct {
	PathParams SignRetrieveHeadPathParams
}

type SignRetrieveHeadResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
