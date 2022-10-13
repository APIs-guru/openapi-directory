package operations

type PushLoginRequestQueryParams struct {
	Callback string `queryParam:"style=form,explode=true,name=callback"`
}

type PushLoginRequestRequest struct {
	QueryParams PushLoginRequestQueryParams
	Request     []byte `request:"mediaType=application/jwt"`
}

type PushLoginRequest200ApplicationJSON struct {
	Status *string `json:"status"`
}

type PushLoginRequestResponse struct {
	Body                                     []byte
	ContentType                              string
	Error                                    *interface{}
	StatusCode                               int64
	PushLoginRequest200ApplicationJSONObject *PushLoginRequest200ApplicationJSON
}
