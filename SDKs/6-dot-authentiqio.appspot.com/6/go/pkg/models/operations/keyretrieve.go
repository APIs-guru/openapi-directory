package operations

import (
	"time"
)

type KeyRetrievePathParams struct {
	Pk string `pathParam:"style=simple,explode=false,name=PK"`
}

type KeyRetrieveJwt struct {
	Since  *time.Time `json:"since,omitempty"`
	Status *string    `json:"status,omitempty"`
	Sub    *string    `json:"sub,omitempty"`
}

type KeyRetrieveRequest struct {
	PathParams KeyRetrievePathParams
}

type KeyRetrieveResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	Jwt         *KeyRetrieveJwt
	StatusCode  int64
}
