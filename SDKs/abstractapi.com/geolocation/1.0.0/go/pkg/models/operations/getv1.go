package operations

import (
	"openapi/pkg/models/shared"
)

var GetV1ServerList = []string{
	"https://ipgeolocation.abstractapi.com",
}

type GetV1QueryParams struct {
	APIKey    string  `queryParam:"style=form,explode=true,name=api_key"`
	Fields    *string `queryParam:"style=form,explode=true,name=fields"`
	IPAddress *string `queryParam:"style=form,explode=true,name=ip_address"`
}

type GetV1Request struct {
	ServerURL   *string
	QueryParams GetV1QueryParams
}

type GetV1Response struct {
	ContentType       string
	StatusCode        int64
	InlineResponse200 *shared.InlineResponse200
}
