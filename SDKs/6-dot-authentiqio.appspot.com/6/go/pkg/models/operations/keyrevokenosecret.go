package operations

type KeyRevokeNosecretQueryParams struct {
	Code  *string `queryParam:"style=form,explode=true,name=code"`
	Email string  `queryParam:"style=form,explode=true,name=email"`
	Phone string  `queryParam:"style=form,explode=true,name=phone"`
}

type KeyRevokeNosecretRequest struct {
	QueryParams KeyRevokeNosecretQueryParams
}

type KeyRevokeNosecret200ApplicationJSON struct {
	Status *string `json:"status"`
}

type KeyRevokeNosecretResponse struct {
	Body                                      []byte
	ContentType                               string
	Error                                     *interface{}
	StatusCode                                int64
	KeyRevokeNosecret200ApplicationJSONObject *KeyRevokeNosecret200ApplicationJSON
}
