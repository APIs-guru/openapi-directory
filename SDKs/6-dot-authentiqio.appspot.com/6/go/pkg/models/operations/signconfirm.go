package operations

type SignConfirmPathParams struct {
	Job string `pathParam:"style=simple,explode=false,name=job"`
}

type SignConfirmRequest struct {
	PathParams SignConfirmPathParams
}

type SignConfirm202ApplicationJSON struct {
	Status *string `json:"status"`
}

type SignConfirmResponse struct {
	Body                                []byte
	ContentType                         string
	Error                               *interface{}
	StatusCode                          int64
	SignConfirm202ApplicationJSONObject *SignConfirm202ApplicationJSON
}
