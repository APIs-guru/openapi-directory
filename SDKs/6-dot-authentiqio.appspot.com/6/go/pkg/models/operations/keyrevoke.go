package operations

type KeyRevokePathParams struct {
	Pk string `pathParam:"style=simple,explode=false,name=PK"`
}

type KeyRevokeQueryParams struct {
	Secret string `queryParam:"style=form,explode=true,name=secret"`
}

type KeyRevokeRequest struct {
	PathParams  KeyRevokePathParams
	QueryParams KeyRevokeQueryParams
}

type KeyRevoke200ApplicationJSON struct {
	Status *string `json:"status"`
}

type KeyRevokeResponse struct {
	Body                              []byte
	ContentType                       string
	Error                             *interface{}
	StatusCode                        int64
	KeyRevoke200ApplicationJSONObject *KeyRevoke200ApplicationJSON
}
