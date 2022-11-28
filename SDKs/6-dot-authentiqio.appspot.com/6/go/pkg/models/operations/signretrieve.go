package operations

type SignRetrievePathParams struct {
	Job string `pathParam:"style=simple,explode=false,name=job"`
}

type SignRetrieveJwt struct {
	Exp   *int64  `json:"exp,omitempty"`
	Field *string `json:"field,omitempty"`
	Sub   *string `json:"sub,omitempty"`
}

type SignRetrieveRequest struct {
	PathParams SignRetrievePathParams
}

type SignRetrieveResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	Jwt         *SignRetrieveJwt
	StatusCode  int64
}
