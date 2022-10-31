package operations

import (
	"openapi/pkg/models/shared"
)

type GetTruststoreInfoResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	TruststoreInfo                                *shared.TruststoreInfo
	GetTruststoreInfoDefaultApplicationJSONString *string
}
