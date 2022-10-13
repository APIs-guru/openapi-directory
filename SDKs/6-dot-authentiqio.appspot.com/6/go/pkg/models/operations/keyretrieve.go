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
	Since  *time.Time `json:"since"`
	Status *string    `json:"status"`
	Sub    *string    `json:"sub"`
}

type KeyRetrieveResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	Jwt         *KeyRetrieve200ApplicationJSONJwt
	StatusCode  int64
}
