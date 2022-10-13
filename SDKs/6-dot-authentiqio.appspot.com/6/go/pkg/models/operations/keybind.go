package operations

type KeyBindPathParams struct {
	Pk string `pathParam:"style=simple,explode=false,name=PK"`
}

type KeyBindRequest struct {
	PathParams KeyBindPathParams
	Request    []byte `request:"mediaType=application/jwt"`
}

type KeyBind200ApplicationJSON struct {
	Status *string `json:"status"`
}

type KeyBindResponse struct {
	Body                            []byte
	ContentType                     string
	Error                           *interface{}
	StatusCode                      int64
	KeyBind200ApplicationJSONObject *KeyBind200ApplicationJSON
}
