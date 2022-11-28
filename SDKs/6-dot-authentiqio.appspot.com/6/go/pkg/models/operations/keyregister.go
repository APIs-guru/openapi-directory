package operations

type KeyRegister201ApplicationJSON struct {
	Secret *string `json:"secret,omitempty"`
	Status *string `json:"status,omitempty"`
}

type KeyRegisterRequest struct {
	Request []byte `request:"mediaType=application/jwt"`
}

type KeyRegisterResponse struct {
	Body                                []byte
	ContentType                         string
	Error                               *interface{}
	StatusCode                          int64
	KeyRegister201ApplicationJSONObject *KeyRegister201ApplicationJSON
}
