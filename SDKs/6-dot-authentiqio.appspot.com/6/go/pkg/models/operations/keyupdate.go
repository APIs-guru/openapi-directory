package operations

type KeyUpdatePathParams struct {
	Pk string `pathParam:"style=simple,explode=false,name=PK"`
}

type KeyUpdateRequest struct {
	PathParams KeyUpdatePathParams
	Request    []byte `request:"mediaType=application/jwt"`
}

type KeyUpdate200ApplicationJSON struct {
	Status *string `json:"status"`
}

type KeyUpdateResponse struct {
	Body                              []byte
	ContentType                       string
	Error                             *interface{}
	StatusCode                        int64
	KeyUpdate200ApplicationJSONObject *KeyUpdate200ApplicationJSON
}
