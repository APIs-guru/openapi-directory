package operations

type SignRequestQueryParams struct {
	Test *int64 `queryParam:"style=form,explode=true,name=test"`
}

type SignRequestRequest struct {
	QueryParams SignRequestQueryParams
	Request     []byte `request:"mediaType=application/jwt"`
}

type SignRequest201ApplicationJSON struct {
	Job    *string `json:"job"`
	Status *string `json:"status"`
}

type SignRequestResponse struct {
	Body                                []byte
	ContentType                         string
	Error                               *interface{}
	StatusCode                          int64
	SignRequest201ApplicationJSONObject *SignRequest201ApplicationJSON
}
