package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemUsagesSecurity struct {
	Jwtsa shared.SchemeJwtsa `security:"scheme,type=http,subtype=bearer"`
}

type GetItemUsagesRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security GetItemUsagesSecurity
}

type GetItemUsagesResponse struct {
	ContentType                        string
	Error                              *shared.Error
	StatusCode                         int64
	GetItemUsages200ApplicationJSONAny *interface{}
}
