package operations

import (
	"openapi/pkg/models/shared"
)

type GetAuthIntrospectSecurity struct {
	Jwtsa shared.SchemeJwtsa `security:"scheme,type=http,subtype=bearer"`
}

type GetAuthIntrospectRequest struct {
	Security GetAuthIntrospectSecurity
}

type GetAuthIntrospectResponse struct {
	ContentType   string
	Error         *shared.Error
	Introspection *shared.Introspection
	StatusCode    int64
}
