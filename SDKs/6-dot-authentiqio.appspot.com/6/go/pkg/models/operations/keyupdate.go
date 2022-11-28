package operations

type KeyUpdatePathParams struct {
	Pk string `pathParam:"style=simple,explode=false,name=PK"`
}

type KeyUpdate200ApplicationJSON struct {
	Status *string `json:"status,omitempty"`
}

type KeyUpdateRequest struct {
	PathParams KeyUpdatePathParams
	Request    []byte `request:"mediaType=application/jwt"`
}

type KeyUpdateResponse struct {
	Body                              []byte
	ContentType                       string
	Error                             *interface{}
	StatusCode                        int64
	KeyUpdate200ApplicationJSONObject *KeyUpdate200ApplicationJSON
}
