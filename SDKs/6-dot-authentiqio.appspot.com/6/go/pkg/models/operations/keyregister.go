package operations

type KeyRegisterRequest struct {
	Request []byte `request:"mediaType=application/jwt"`
}

type KeyRegister201ApplicationJSON struct {
	Secret *string `json:"secret"`
	Status *string `json:"status"`
}

type KeyRegisterResponse struct {
	Body                                []byte
	ContentType                         string
	Error                               *interface{}
	StatusCode                          int64
	KeyRegister201ApplicationJSONObject *KeyRegister201ApplicationJSON
}
