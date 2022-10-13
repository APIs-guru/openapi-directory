package operations

type SignDeletePathParams struct {
	Job string `pathParam:"style=simple,explode=false,name=job"`
}

type SignDeleteRequest struct {
	PathParams SignDeletePathParams
}

type SignDelete200ApplicationJSON struct {
	Status *string `json:"status"`
}

type SignDeleteResponse struct {
	Body                               []byte
	ContentType                        string
	Error                              *interface{}
	StatusCode                         int64
	SignDelete200ApplicationJSONObject *SignDelete200ApplicationJSON
}
