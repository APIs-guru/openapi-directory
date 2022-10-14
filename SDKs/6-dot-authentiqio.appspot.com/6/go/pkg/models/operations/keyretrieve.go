package operations

import (
	"time"
)

type KeyRetrievePathParams struct {
	Pk string `pathParam:"style=simple,explode=false,name=PK"`
}

type KeyRetrieveRequest struct {
	PathParams KeyRetrievePathParams
}

type KeyRetrieve200ApplicationJSONJwt struct {
	Since  *time.Time `json:"since,omitempty"`
	Status *string    `json:"status,omitempty"`
	Sub    *string    `json:"sub,omitempty"`
}

type KeyRetrieveResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	Jwt         *KeyRetrieve200ApplicationJSONJwt
	StatusCode  int64
}
